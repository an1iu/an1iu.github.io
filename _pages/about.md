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
              {% if pub.project %}<a href="{{ pub.project }}" target="_blank" rel="noopener noreferrer">{% include icon.html name="link" %} Project</a>{% endif %}
              {% if pub.code %}<a href="{{ pub.code }}" target="_blank" rel="noopener noreferrer">{% include icon.html name="github" %} Code</a>{% endif %}
            </p>
          </div>
        </li>
        {% endfor %}
      </ol>
    </div>
  </section>

  <section class="section" id="experience" aria-labelledby="experience-title">
    <h2 id="experience-title">Experience</h2>
    <ol class="timeline">
      <li>
        <span class="timeline__logo"><img src="images/horizon-logo.png" alt="" loading="lazy"></span>
        <div>
          <h3>Horizon Robotics</h3>
          <p>Research Intern</p>
        </div>
        <time datetime="2026-11">2026.11–Present</time>
      </li>
    </ol>
  </section>

  <section class="section" id="education" aria-labelledby="education-title">
    <h2 id="education-title">Education</h2>
    <ol class="timeline">
      <li>
        <span class="timeline__logo"><img src="images/casia-logo-web.png" alt="" loading="lazy"></span>
        <div>
          <h3>Institute of Automation, Chinese Academy of Sciences</h3>
          <p>M.S., Pattern Recognition and Intelligent Systems · <a href="https://mais.ia.ac.cn/" target="_blank" rel="noopener noreferrer">MAIS</a></p>
          <p><em>Supervised by Assoc. Prof. <a href="https://www.ia.cas.cn/rcdw/fyjy/202404/t20240422_7129937.html" target="_blank" rel="noopener noreferrer">Fulin Tang</a></em></p>
        </div>
        <time>2026 – Present</time>
      </li>
      <li>
        <span class="timeline__logo"><img src="images/cqu-logo-web.png" alt="" loading="lazy"></span>
        <div>
          <h3>Chongqing University</h3>
          <p>B.E., <a href="https://cs.cqu.edu.cn/" target="_blank" rel="noopener noreferrer">Computer Science and Technology</a></p>
          <p><em>Supervised by Assoc. Prof. <a href="https://sites.google.com/view/yiqun-wang/" target="_blank" rel="noopener noreferrer">Yiqun Wang</a></em></p>
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
