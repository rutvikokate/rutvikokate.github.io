---
layout: page
title: Aiswaryam
description: A suite of AI-driven digital experiences across multiple categories, such as traffic accidents, air pollution, traffic congestion, waste management to help policymakers and government officials make data-driven decisions.
img: assets/img/aiswaryam/cave.png
importance: 2
category: work
related_publications: false
---

<h3>📃 Summary</h3>
AISwARYAM (AI for Sustainable Infrastructure and Resource Planning, Analysis and Monitoring). A suite of AI-driven digital experiences across multiple categories, such as traffic accidents, air pollution, traffic congestion, waste management to help policymakers and government officials make data-driven decisions.
Natural language, AR/VR interfaces increasing data perception among government administrators to make decisions based on visualizations of geospatial hotspots, forecasts and summary recommendations across multiple urban sectors.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/aiswaryam/cave1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Demonstration to members from the Ministry and consortium partners.
</div>

<h3>✨ Motivation</h3>
While there is increased availability of data thanks to widespread digitization efforts, there is a lack of corresponding user-friendly AI tools for infrastructure/resource monitoring and analysis accessible to diverse stakeholders in the government. The project seeks to develop an AI stack for urban governance that can serve as a layer on top of the digitization efforts.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/aiswaryam/aiswaryam1.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

<h3>🔁 Methodology</h3>
The series of prototypes showcases: (i)  a  unified  dashboard  for  hotspot  analysis  in  diverse  urban  sectors  from  an  AI  perspective; (ii) decision theatre capabilities with a smart meter data through a digital twin of a built environment. The PoC  includes efforts that engage technologists, domain experts, government bodies and implementation agencies.
<h4>Datasets</h4>
Datasets were captured across - traffic congestion (Hyderabad Arcadis IBI), traffic accidents (Karnataka State traffic department), air pollution (Aurassure,Google, CPCB), built environment (IIT Hyderabad) from respective bodies. Data available from public sources and consortium partners was utilized for model development. The nature of data was spatio-temporal in nature for hotspot anomaly detection across geographic locations. 
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/aiswaryam/aiswaryam2.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>

<h4>Model development & Agentic chat interface</h4>
Based on the sourced datasets, an unsupervised algorithm - Isolation forest, was used for detecting anomalies by constructing multiple isolation trees. Here, the average path length across all trees determines if a point is an anomaly, with shorter lengths
indicating anomalies. Isolation forests are used as the choice of machine learning algorithm for anomaly/hotspot detection across the considered domains. A indian language-centric multimodal chat-based AI system is proposed for queries on various data sources originating from urban governance. Such a query-based chat system is envisioned to empower urban municipal functionaries on getting data and Al-driven insights without being heavily dependent on IT professionals or without requiring too much technical knowledge in native language. Powered by freely available open-source models without the need to pass any sensitive data or information to external agencies.

<h3>💻Dashboard</h3>
The dashboard aims to provide AI-driven spatio-temporal hotspot analysis across multiple categories, such as traffic accidents, air pollution, garbage management, to help policymakers and government officials make data-driven decisions.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/aiswaryam/44.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/aiswaryam/45.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/aiswaryam/46.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/aiswaryam/48.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/aiswaryam/49.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/aiswaryam/50.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>

<h3>Presentation slides</h3>
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="450" src="https://embed.figma.com/proto/sMOLpQWBspUl3wF9TPWYTa/Portfolio--1-?node-id=827-3&p=f&scaling=min-zoom&content-scaling=fixed&page-id=827%3A2&embed-host=share" allowfullscreen></iframe>

<h3>Next steps</h3>
Our work was presented at the final stage of <a href='https://aiswaryam.ai.iith.ac.in/'>AI Center of Excellence, IIT Hyderabad</a> in the domain of sustainable cities at New Delhi in September 2024. Based on this work we got the opportunity to further take this project towards the Phase 2 of the AI CoEs mission. We are now focussing on building AI/ML and end-user digital services for urban infrastructure monitoring, where we are working with GHMC (Greater Hyderabad Municipal Corporation) for developing solutions for efficient garbage monitoring, disposal and recycling. As a part of our efforts in the initial phase of the project, we are also working on waste segregation and management - <a href='https://aiswaryam.ai.iith.ac.in/'>AI for Waste segregation</a>
