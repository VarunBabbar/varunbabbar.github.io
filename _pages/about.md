---
permalink: /
title: "About"
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div style="text-align: justify">
Hi! I'm Varun Babbar, a PhD student in Machine Learning at Duke University, advised by <a href="https://users.cs.duke.edu/~cynthia/">Cynthia Rudin</a>. Previously, I worked as an ML Researcher at JP Morgan London, where I developed machine learning methods to accelerate software development. This included methods to generate <a href='https://arxiv.org/pdf/2208.09495.pdf'> embeddings of repositories</a>, designing systems based on large language models to automate code development, and code unit test quality assessment based on weakly supervised learning (no links here because these were internal projects).
</div>
<div style="line-height:75%;">
    <br>
</div>
<div style="text-align: justify">
I graduated from the University of Cambridge in 2022 with a BA + MEng in Information and Computer Engineering, ranking in the top 5% of my class. During my time at Cambridge, I've collaborated with <a href='https://umangsbhatt.github.io/'> Umang Bhatt </a> and <a href='https://mlg.eng.cam.ac.uk/adrian/'> Adrian Weller </a> on human-aligned uncertainty quantification and risk control, <a href='https://sjmoran.github.io/'> Sean Moran </a> on federated learning for Covid-19 diagnosis, and <a href='https://www.cl.cam.ac.uk/~rkm38/'> Rafal Mantiuk </a> on developing visual loss functions for image to image translation models. 
<br>
<br>
</div>

# Research Interests

---

<div style="text-align: justify"> 
My research focuses on making machine learning models more interpretable, reliable, and actionable in real-world settings. I develop methods that balance predictive performance with transparency, such as discrete optimization techniques for near-optimal models (ICML Oral), interpretable uncertainty quantification aligned with human judgments (IJCAI Oral, NeurIPS workshop), and diagnostic tools to understand distribution shifts between datasets (JMLR). My work combines theoretical rigor with practical relevance, often inspired by challenges in healthcare, criminal justice, and perception. I’m especially interested in model selection under constraints, human-aligned evaluation, and data-centric ML.
</div> 
<!-- My research interests lie broadly in trustworthy machine learning and human-AI collaboration. In particular, I design algorithms, techniques, and frameworks that enable users to better understand the predictive models they are deploying as well as the data they train the models on. I like to think of my research as a tree:
</div>
![My Research Tree](/images/my_research_tree.png)
1. <div style="text-align: justify"> The characteristics of test and training datasets must be fully understood. In particular, having differing training and test distributions of data risks deployment of a model that is flawed. In these cases, explaining distribution shifts using interpretable methods is more important than viewing datasets through the lens of basic statistical measurements. </div>
2. <div style="text-align: justify"> The predictive model must be interpretable, computationally inexpensive to run, and have some guarantees on optimality. The end user and all relevant stakeholders should fully understand the operation and the limitations of the model. </div>
3. <div style="text-align: justify"> When full interpretability is not possible (e.g. with heavily parameterized models such as LLMs), can we obtain sound explanations from the model? </div> -->




# Random Facts

---

<div style="text-align: justify"> <b> Here are the cities I've lived in (in chronological order)</b>: <br> New Delhi &nbsp; <img src="files/plane.png" width="40" height="40"> &nbsp; Mumbai &nbsp; <img src="files/plane.png" width="40" height="40"> &nbsp; Singapore &nbsp; <img src="files/plane.png" width="40" height="40"> &nbsp; Mumbai &nbsp; <img src="files/plane.png" width="40" height="40"> &nbsp; Cambridge &nbsp; <img src="files/plane.png" width="40" height="40"> &nbsp; London &nbsp; <img src="files/plane.png" width="40" height="40"> &nbsp; Durham, North Carolina  <img src="files/plane.png" width="40" height="40"> &nbsp; New York </div>
<br>
<b>Here are the languages I am fluent in</b>: English, Hindi, French.
<div style="line-height:60%;">
    <br>
</div>
<b> My non-sporting interests are quite random</b>: Rubiks cubes, chess, and playing the ukulele!
<br>
<div style="text-align: justify"> <b> I love playing basketball and squash</b>: I was part of Cambridge's Varsity squash team. We toured a lot in and around Cambridgeshire, playing against county clubs and university teams alike. I'm still active in Duke's squash and basketball communities, though I only play for recreation. </div>

<!-- ## <!-- Create content & metadata -->

<!-- For site content, there is one markdown file for each type of content, which are stored in directories like \_publications, \_talks, \_posts, \_teaching, or \_pages. For example, each talk is a markdown file in the [\_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the \_talks directory). -->

<!-- **Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons.

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring academicpages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful. -->
