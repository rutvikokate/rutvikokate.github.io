---
layout: page
title: ALIA
description: Analogical LLM Ideation Agent. This research work advances the theoretical knowledge of Al-assisted ideation and computer-aided creativity by presenting analogical ideation framework for structured and diversified idea generation.
img: assets/img/aliaposter.png
importance: 1
category: work
---

<h3>Background</h3>
<ul>
<li>Humans are influenced by their surrounding which also acts as a source of inspiration to  them. Prior experiences often shape the formation of new inspirations which can be objects,  images, phenomenon and abstract concepts. (Visual memory, verbal information etc)</li>
<li>The stimulus for inspiration often  depends on the idea generation method chosen. Intuitive or Logical. (TRIZ, C-sketch, Brainstorming)</li>
<li>The term  "computer-supported creativity" describes the application of technology to support and  improve human creativity. (Human-AI Interaction, AI in creavitiy)</li>
</ul>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/alia/participants.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Participants interacting with ALIA in an ideation session.
</div>

<h3>Literature findings</h3>
<ul>
<li>Fewer studies exist that explore the role of LLMs for analogical creative design ideation, and there is a lack of methods for evaluation and benchmarking of language models in creativity tasks.</li>
<li> The human cognitive mechanisms like reasoning, empathy, motivation,
 and evaluation contribute towards shaping a fruitful creative design process.
 However, as AI systems rely on algorithmic process for content generation rather
 than the mechanism involved in human creative process, there is a fundamental
 difference in output generation. </li>
</ul>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/alia/methodology.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Research methodology followed throughout the study.
</div>

<h3>Objectives</h3>
<ul>
<li>Fewer studies exist that explore the role of LLMs for analogical creative design ideation, and there is a lack of methods for evaluation and benchmarking of language models in creativity tasks.</li>
<li> The human cognitive mechanisms like reasoning, empathy, motivation,
 and evaluation contribute towards shaping a fruitful creative design process.
 However, as AI systems rely on algorithmic process for content generation rather
 than the mechanism involved in human creative process, there is a fundamental
 difference in output generation. </li>
</ul>
<br/>

<h3>Ideation methods</h3>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/alia/ideation.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Synectics method for ideation and analogical thinking
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/alia/hegelian.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Hegelian dialectical thinking process
</div>

<h3>Research questions</h3>
<ul>
<li><i>RQ1 </i>: How effective is the impact of LLM-generated synectic triggers and
 dialectical thinking process on the novelty of ideas compared to those generated
 without any support tool?</li>
 <li><i>RQ2 </i>: How does patterns of turn-taking and initiative control between humans
 and AI affect the outcomes of a co-creative ideation process?</li>
 <li><i>RQ3 </i>: Which architecture of models perform better for improving creativity metrics?</li>
</ul>


<h3>Conceptual framework</h3>
We propose a conceptual framework that integrates LLMs into a structured design-by-analogy process, based on synectics and dialectical reasoning. The core ideation stages provide an iterative phase of convergent divergent thinking for exploring flexible idea domains and conflict resolution mechanisms helpful in synthesizing the concepts. 

The GenAI layer operates across all the ideation stages and serves two main purposes- first, gathering contextual information of the topic being discussed; second, generating content in the form of textual stimuli based on the ideation stage and context gathered. The framework takes into consideration external contributing factors which generally affects any co-creative ideation session.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/alia.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Proposed AI co-creative ideation framework based on design heuristics
</div>

<h3>Analogical LLM Ideation Agent (ALIA)</h3>
Analogical LLM Ideation Agent (ALIA) is a desktop-based application to be used in a group ideation session. ALIA operates by providing contextually relevant stimuli in the form of trigger questions, analogies and dialectical statements throughout the ideation session. Ideation sessions with ALIA facilitate integration of human involvement and system-level contributions within a collaborative physical space.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/alia/ui.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    User interface of ALIA
</div>

<h4>User flow</h4>
Throughout all the stages of ideation, ALIA continuously runs a real-time speech-to-text service that captures the participant’s discussion and transcribes it into a summary over the course of the session.  The ideation session duration with ALIA is 30 minutes long, where the participants are exposed to the ideation stages; starting from understanding the problem statement to generating concepts and reflecting their ideas on the sticky notes
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/alia/flow.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Convergent-divergent thinking flow guided by ALIA
</div>

<h3>Analogical Creativity Task (ACT)</h3>
To address the gap of standardised creativity benchmarks for LLM-generated analogies, systematic cross-domain analogy tasks were conducted. The aim was to evaluate our proposed method of triggering creativity with synectic triggers and study LLMs’fundamentalnaturewhenexposedtoanalogical creativity tasks. The tasks involved generating a dataset of analogies and human evaluations of output content for benchmarking the different language models and the trigger combinations.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/alia/table1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Sample entry of the analogical concepts dataset
</div>


<h3>Results</h3>
<h4>RQ1: How effective is the LLM-design heuristic based support tool</h4>
<b> Leveraging LLMs to generate analogical stimuli based on design heuristics
 like synectics and dialectial reasoning, enhanced the creative output of
 novice designers.</b>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/alia/result1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

