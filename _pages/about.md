---
permalink: /
title: ""
excerpt: ""
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<div class="home-page">
  <section class="hero" id="about" aria-labelledby="home-title">
    <figure class="hero__portrait">
      <img src="{{ site.author.avatar }}" alt="Portrait of An Liu" width="480" height="600" fetchpriority="high">
      <figcaption>{% include icon.html name="pin" %} Beijing, China</figcaption>
    </figure>
    <div class="hero__copy">
      <h1 id="home-title">An Liu <span lang="zh">刘安</span></h1>
      <p class="hero__lede">M.S. student at the Institute of Automation, Chinese Academy of Sciences.</p>
      <p class="hero__intro">I study intelligent agents that perceive, reason, and act in the physical world, with a particular focus on Embodied AI, Agentic Systems, and World Models.</p>
      <div class="actions" aria-label="Profile links">
        <a class="button button--primary" href="mailto:{{ site.author.email }}">{% include icon.html name="mail" %} Email</a>
        <a class="button" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener noreferrer">{% include icon.html name="scholar" %} Scholar</a>
        <a class="button" href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener noreferrer">{% include icon.html name="github" %} GitHub</a>
      </div>
    </div>
  </section>

  <section class="section" id="news" aria-labelledby="news-title">
    <h2 id="news-title">News</h2>
    <ol class="news" aria-label="News">
      <li><time datetime="2026-09">Sep 2026</time><p>Began an M.S. at the <strong>Institute of Automation, Chinese Academy of Sciences (CASIA)</strong>.</p></li>
      <li><time datetime="2026-04">Apr 2026</time><p><strong>MT-PCR</strong> received the Best Paper Award at CVM 2026.</p></li>
      <li><time datetime="2025-09">Sep 2025</time><p>Admitted to CASIA for an M.S. in Pattern Recognition and Intelligent Systems.</p></li>
      <li><time datetime="2022-09">Sep 2022</time><p>Began a B.E. in Computer Science and Technology at Chongqing University.</p></li>
    </ol>
    <script>
      (function () {
        var box = document.querySelector('.news');
        if (!box) return;
        var items = box.querySelectorAll('li');
        function edges() {
          box.classList.toggle('at-top', box.scrollTop <= 1);
          box.classList.toggle('at-end', box.scrollTop + box.clientHeight >= box.scrollHeight - 1);
        }
        function size() {
          var more = items.length > 3;
          box.classList.toggle('is-scrollable', more);
          box.style.maxHeight = more ? (items[3].offsetTop + 36) + 'px' : '';
          if (more) box.setAttribute('tabindex', '0'); else box.removeAttribute('tabindex');
          edges();
        }
        box.addEventListener('scroll', edges, { passive: true });
        window.addEventListener('resize', size);
        window.addEventListener('load', size);
        size();
      })();
    </script>
  </section>

  <section class="section" id="publications" aria-labelledby="publications-title">
    <h2 id="publications-title">Publication</h2>
    <div>
      <ol class="pubs">
        {% for pub in site.data.publications %}
        <li class="pub">
          {% if pub.image %}<a class="pub__figure" href="{{ pub.url }}" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true"><img src="{{ pub.image }}" alt="" loading="lazy"></a>{% endif %}
          <div class="pub__body">
            <p class="pub__meta"><span>{{ pub.venue }}</span>{% if pub.award %}<span class="tag">{% include icon.html name="award" %} {{ pub.award }}</span>{% endif %}</p>
            <h3 class="pub__title"><a href="{{ pub.url }}" target="_blank" rel="noopener noreferrer">{{ pub.title }}</a></h3>
            <p class="pub__authors">{{ pub.authors }}</p>
            <p class="pub__links">
              {% if pub.paper %}<a href="{{ pub.paper }}" target="_blank" rel="noopener noreferrer">{% include icon.html name="paper" %} Paper</a>{% endif %}
              {% if pub.code %}<a href="{{ pub.code }}" target="_blank" rel="noopener noreferrer">{% include icon.html name="github" %} Code</a>{% endif %}
            </p>
          </div>
        </li>
        {% endfor %}
      </ol>
    </div>
  </section>

  <section class="section" id="education" aria-labelledby="education-title">
    <h2 id="education-title">Education</h2>
    <ol class="timeline">
      <li>
        <span class="timeline__logo"><img src="images/casia-logo-web.png" alt="" loading="lazy"></span>
        <div>
          <h3>Institute of Automation, Chinese Academy of Sciences</h3>
          <p>M.S., Pattern Recognition and Intelligent Systems · <a href="https://mais.ia.ac.cn/" target="_blank" rel="noopener noreferrer">MAIS</a></p>
        </div>
        <time>2026 – Present</time>
      </li>
      <li>
        <span class="timeline__logo"><img src="images/cqu-logo-web.png" alt="" loading="lazy"></span>
        <div>
          <h3>Chongqing University</h3>
          <p>B.E., <a href="https://cs.cqu.edu.cn/" target="_blank" rel="noopener noreferrer">Computer Science and Technology</a></p>
        </div>
        <time>2022 – 2026</time>
      </li>
    </ol>
  </section>

  <div class="visitor-map" aria-hidden="true">
    <script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=BI2fOLiOfyWB8fBOW741241yGqhmnO63zmdn9b5yl7I&cl=ffffff&w=0"></script>
  </div>

  <footer class="site-footer">
    <p>© {{ site.time | date: '%Y' }} An Liu</p>
    <a class="to-top" href="#about" target="_self">Back to top {% include icon.html name="arrow" %}</a>
  </footer>
</div>
