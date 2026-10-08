---
title: CIFAR-10, classical ML vs CNN
summary: A course project measuring how far classical models get on raw image pixels, compared with a convolutional network.
kind: ML / course project
status: Complete
role: Classical ML pipeline (team of two)
stack: [Python, scikit-learn, TensorFlow/Keras, Google Colab, Kaggle]
repo: https://github.com/ronazpradhan/CSC266-CIFAR10-Project
order: 3
---

## Problem

For CSC 266 (Artificial Intelligence), we compared classical machine learning with deep learning on CIFAR-10: 60,000 colour images, 32×32 pixels, 10 classes. The question underneath: how much of the gap is the model, and how much is the representation?

My part was the classical side. My teammate, Aakriti Maharjan, built the CNN.

## Constraints

- Each image flattens to 3,072 features: too many for distance-based models to behave well, and slow to train.
- Free compute: Google Colab and Kaggle notebooks.
- Classical models see a flat vector. They have no idea which pixels are next to each other.

## Decisions

**Standardise, then PCA to 95% variance.** Reducing dimensions first made KNN and the tree models practical and removed near-constant directions.

**Four deliberately different models.** An ensemble (Random Forest), an instance-based method (KNN), a probabilistic one (Gaussian Naive Bayes) and a single tree. Different assumptions, so the failures tell you something.

**Same metrics for everything.** Accuracy and macro F1, plus confusion matrices to see which classes get mixed up.

## Implementation

Loading and normalisation, PCA, training with `n_jobs=-1` for parallel CPU use, then evaluation and confusion-matrix plots, all in one notebook.

## Results

| Model | Accuracy | Macro F1 |
| --- | --- | --- |
| Random Forest | 43.74% | 0.43 |
| K-Nearest Neighbors | 36.25% | 0.35 |
| Gaussian Naive Bayes | 31.22% | 0.31 |
| Decision Tree | 25.62% | 0.25 |
| CNN (teammate's work) | 85.40% | 0.85 |

Random Forest was the strongest classical baseline. The CNN row is my teammate's result, shown for comparison: the jump comes from a model that sees the spatial structure flattening throws away.

## Trade-offs

- PCA made training feasible but is linear; it can't recover the spatial structure that matters in images.
- These are baselines within the time and compute we had, not best-possible classical scores.

## What I'd change

Give the classical models better inputs than raw pixels (HOG descriptors, or embeddings from a small pretrained network) to separate "classical models are weak" from "raw pixels are a bad representation".
