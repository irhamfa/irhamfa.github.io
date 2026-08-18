(function () {
  "use strict";

  var toggle = document.getElementById("search-toggle");
  var panel = document.getElementById("search-panel");
  var input = document.getElementById("search-input");
  var resultsEl = document.getElementById("search-results");
  var statusEl = document.getElementById("search-status");

  if (!toggle || !panel || !input) return;

  var indexData = null;
  var indexLoading = null;
  var debounceTimer = null;

  function loadIndex() {
    if (indexData) return Promise.resolve(indexData);
    if (indexLoading) return indexLoading;

    statusEl.textContent = "Memuat data pencarian...";
    indexLoading = fetch(window.searchIndexURL || "/index.json")
      .then(function (res) {
        if (!res.ok) throw new Error("Gagal memuat index.json");
        return res.json();
      })
      .then(function (data) {
        indexData = data;
        statusEl.textContent = "";
        return data;
      })
      .catch(function () {
        statusEl.textContent = "Gagal memuat data pencarian.";
        return [];
      });

    return indexLoading;
  }

  function openSearch() {
    panel.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    loadIndex().then(function () {
      input.focus();
    });
  }

  function closeSearch() {
    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }

  function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function highlight(text, query) {
    if (!query) return escapeHTML(text);
    var escaped = escapeHTML(text);
    var escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return escaped.replace(new RegExp("(" + escapedQuery + ")", "ig"), "<mark>$1</mark>");
  }

  function score(item, terms) {
    var title = item.title.toLowerCase();
    var content = (item.content || "").toLowerCase();
    var s = 0;
    terms.forEach(function (term) {
      if (title.indexOf(term) !== -1) s += 5;
      if (content.indexOf(term) !== -1) s += 1;
    });
    return s;
  }

  function snippetAround(content, term) {
    var lower = content.toLowerCase();
    var idx = lower.indexOf(term);
    if (idx === -1) return content.slice(0, 140);
    var start = Math.max(0, idx - 60);
    var end = Math.min(content.length, idx + term.length + 80);
    return (start > 0 ? "…" : "") + content.slice(start, end) + (end < content.length ? "…" : "");
  }

  function render(query, items) {
    resultsEl.innerHTML = "";

    if (!query) {
      statusEl.textContent = "Mulai ketik untuk mencari artikel.";
      return;
    }

    if (items.length === 0) {
      statusEl.textContent = 'Tidak ada hasil untuk "' + query + '".';
      return;
    }

    statusEl.textContent = items.length + " hasil ditemukan.";

    var firstTerm = query.toLowerCase().split(/\s+/)[0];

    items.slice(0, 20).forEach(function (item) {
      var li = document.createElement("li");
      li.className = "search-result-item";

      var snippetSource = item.content && item.content.toLowerCase().indexOf(firstTerm) !== -1
        ? snippetAround(item.content, firstTerm)
        : item.summary;

      li.innerHTML =
        '<a href="' + item.url + '">' +
          '<span class="search-result-title">' + highlight(item.title, query) + "</span>" +
          '<span class="search-result-date">' + escapeHTML(item.date || "") + "</span>" +
          '<span class="search-result-snippet">' + highlight(snippetSource, query) + "</span>" +
        "</a>";
      resultsEl.appendChild(li);
    });
  }

  function doSearch(query) {
    if (!indexData) return;
    var q = query.trim().toLowerCase();
    if (!q) {
      render("", []);
      return;
    }
    var terms = q.split(/\s+/).filter(Boolean);

    var matched = indexData
      .map(function (item) { return { item: item, s: score(item, terms) }; })
      .filter(function (r) { return r.s > 0; })
      .sort(function (a, b) { return b.s - a.s; })
      .map(function (r) { return r.item; });

    render(q, matched);
  }

  toggle.addEventListener("click", function () {
    if (panel.hidden) {
      openSearch();
    } else {
      closeSearch();
    }
  });

  document.addEventListener("click", function (e) {
    if (panel.hidden) return;
    if (panel.contains(e.target) || toggle.contains(e.target)) return;
    closeSearch();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !panel.hidden) closeSearch();
    // Pintasan: tekan "/" untuk buka pencarian (kecuali sedang mengetik di field lain)
    if (e.key === "/" && panel.hidden && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault();
      openSearch();
    }
  });

  input.addEventListener("input", function () {
    var value = input.value;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      doSearch(value);
    }, 120);
  });
})();
