---
title: "What Is Topology?"
description: "An intuitive introduction to topology: open sets, continuity, homeomorphisms, and the properties of spaces that survive continuous deformation."
pubDatetime: 2026-07-30T18:00:00+02:00
author: "Darko Dekan"
featured: true
draft: false
tags:
  - mathematics
  - topology
  - pure-mathematics
---

Topology is the branch of mathematics that studies **spaces, continuity, and the properties preserved by continuous change**.

You may have heard the popular description that a topologist cannot distinguish a coffee mug from a doughnut. That slogan is memorable, but it can also make topology sound less precise than it is. Topology is not merely geometry in which objects are stretched like rubber. It is a rigorous language for answering questions such as:

- What does it mean for points to be close when no distance has been defined?
- When should two spaces count as having the same shape?
- Which functions preserve the structure of a space?
- What properties remain unchanged under continuous deformation?
- How can local information determine the global structure of a space?

The central idea is that many important features of a space do not depend on exact lengths, angles, or coordinates.

## Table of contents

## Topology versus geometry

Geometry usually studies quantitative properties:

- lengths,
- angles,
- areas,
- curvature,
- and exact position.

Topology studies more qualitative properties:

- connectedness,
- continuity,
- compactness,
- the number and arrangement of holes,
- and whether one space can be continuously transformed into another.

Consider a circle and an ellipse. Geometrically, they are different: their curvature and symmetry are different, and an ellipse has two distinct axis lengths. Topologically, however, they have the same structure. One can be continuously deformed into the other without cutting, gluing, or identifying previously distinct points.

A circle and a line segment are different even topologically. If one point is removed from a circle, the remaining space stays connected. If an interior point is removed from a line segment, the segment splits into two pieces. This difference cannot be removed by stretching.

Topology therefore ignores some geometric information, but it does not ignore structure altogether. It keeps precisely the information related to continuity.

## The basic object: a topological space

In elementary calculus, continuity is defined using distance. For example, we say that values of a function become close when its inputs become close.

Topology reverses this perspective. Instead of starting with distance and then defining continuity, it identifies the more fundamental structure needed to discuss continuity directly.

A **topological space** consists of:

1. a set `X`, whose elements are called points;
2. a collection of subsets of `X`, called the open sets.

The collection of open sets is called a **topology** on `X`. It must satisfy three rules:

1. The empty set and `X` itself are open.
2. Any union of open sets is open.
3. Any finite intersection of open sets is open.

These rules capture the behavior of familiar open intervals and open regions from analysis.

For example, on the real line, sets such as

```text
(-1, 2)
(0, 1) ∪ (3, 5)
the entire real line
the empty set
```

are open in the usual topology.

The word “open” does not mean that a set is physically open or missing its boundary in every imaginable context. Openness is determined by the chosen topology. The same underlying set can carry many different topologies.

## Why open sets matter

Open sets describe which points count as being locally near one another.

If `U` is an open set containing a point `x`, then `U` is called a **neighborhood** of `x`—or, more precisely, an open neighborhood of `x`. Neighborhoods allow us to discuss what happens close to a point without requiring numerical distances.

This makes several familiar ideas possible:

- A sequence converges to a point if it eventually lies in every neighborhood of that point.
- A point lies in the interior of a set if it has a neighborhood contained in that set.
- A point lies in the closure of a set if every neighborhood of it meets the set.
- A space is connected if it cannot be separated into two disjoint, nonempty open pieces.

Topology packages all of these concepts into one common framework.

## Continuity without distances

Topology gives a remarkably concise definition of continuity.

A function

```text
f: X → Y
```

between topological spaces is **continuous** if the preimage of every open set in `Y` is open in `X`.

In symbols:

```text
V open in Y  ⟹  f⁻¹(V) open in X
```

Why preimages rather than images?

Preimages behave well with unions and intersections:

```text
f⁻¹(A ∪ B) = f⁻¹(A) ∪ f⁻¹(B)
f⁻¹(A ∩ B) = f⁻¹(A) ∩ f⁻¹(B)
```

This matches the defining rules for open sets. Direct images do not preserve this structure nearly as reliably.

On ordinary Euclidean spaces, this topological definition agrees with the epsilon–delta definition from analysis. Its advantage is that it still makes sense on spaces where no useful distance has been chosen.

## When are two spaces topologically the same?

The topological notion of sameness is called a **homeomorphism**.

A function `f: X → Y` is a homeomorphism if:

1. it is bijective;
2. it is continuous;
3. its inverse is continuous.

If a homeomorphism exists between `X` and `Y`, the spaces are called **homeomorphic**.

A homeomorphism pairs the points of two spaces in a way that preserves their entire topological structure. Anything defined purely in topological terms must be shared by homeomorphic spaces.

Examples of topological invariants include:

- connectedness,
- compactness,
- the number of connected components,
- and, in suitable settings, the number of holes.

Lengths and angles are not topological invariants. A homeomorphism can distort them.

## The coffee mug and doughnut

A solid coffee mug with one handle and a solid doughnut both have one essential hole. In an idealized mathematical model, one can be continuously reshaped into the other without tearing the material, attaching new pieces, or forcing two different points to become one.

That is why they are described as topologically equivalent.

But the slogan needs qualifications:

- We must specify whether we mean solid objects or only their surfaces.
- The transformation must be a homeomorphism, not merely an informal animation.
- Cutting and gluing are not allowed.
- Crushing an entire region into a single point is not allowed because the inverse would fail to be continuous—or the map would cease to be bijective.

Topology does not say that all rounded objects are equivalent. A sphere and a torus are not homeomorphic: the torus has a hole through it, while the sphere does not.

## Simple examples of topologies

Topology becomes clearer when we see that the usual topology is not the only possibility.

### The discrete topology

Let `X` be any set. Declare every subset of `X` to be open.

This is called the **discrete topology**.

Every point forms an open set by itself, so points are completely separated from one another. Every function from a discrete space to any topological space is continuous.

### The indiscrete topology

At the opposite extreme, declare only these sets open:

```text
∅ and X
```

This is called the **indiscrete topology**.

It contains as little open-set information as possible. Every function from any topological space into an indiscrete space is continuous.

### The usual topology on the real line

The standard topology on the real numbers is generated by open intervals. A set is open when every point in it lies inside some open interval contained entirely in the set.

This is the topology used implicitly in elementary real analysis.

These examples show that a topology is additional structure placed on a set. Knowing only the points is not enough; we also need to know which subsets are open.

## Important topological properties

Several ideas appear repeatedly throughout topology.

### Connectedness

A space is connected if it cannot be divided into two disjoint, nonempty open sets whose union is the entire space.

Informally, a connected space is in one piece. An interval is connected, while the union of two separated intervals is not.

### Compactness

Compactness is a finiteness-like property. One definition says that whenever a compact space is covered by open sets, finitely many of those open sets already cover it.

In Euclidean space, a subset is compact exactly when it is closed and bounded. In general topological spaces, however, compactness is more fundamental than closedness plus boundedness.

Compactness is important because it often converts local information into global conclusions. Many familiar theorems from analysis are consequences of compactness.

### Separation properties

Separation axioms describe how effectively points and closed sets can be distinguished using open neighborhoods.

The best-known example is the **Hausdorff property**: any two distinct points have disjoint neighborhoods. Hausdorff spaces behave in many ways like familiar metric spaces; for example, limits of convergent sequences are unique.

### Local properties

A space can have a property near every point without having it globally.

For example, a circle looks locally like an open interval: around each point, a sufficiently small part of the circle resembles a piece of the real line. Globally, however, a circle and a line are different.

This local-versus-global distinction is central to the study of manifolds.

## Major areas of topology

Topology is not a single narrow subject. Several major areas developed from its basic ideas.

### General topology

General topology studies the foundations:

- open and closed sets,
- continuity,
- compactness,
- connectedness,
- convergence,
- product and quotient spaces,
- and separation axioms.

It provides the language used by the rest of topology and much of modern analysis.

### Algebraic topology

Algebraic topology assigns algebraic objects to spaces in order to distinguish them.

Examples include:

- the fundamental group,
- homology groups,
- and cohomology groups.

Instead of trying to compare complicated spaces directly, we compare their algebraic invariants.

### Differential topology

Differential topology studies smooth manifolds and smooth maps. It connects topology with multivariable calculus, differential geometry, and the theory of dynamical systems.

Typical questions concern critical points, transversality, vector fields, and the global consequences of differentiable structure.

### Geometric topology

Geometric topology focuses heavily on manifolds in low dimensions, especially knots, surfaces, and three- and four-dimensional spaces.

Knot theory is one of its most recognizable subjects: two knots are considered equivalent if one can be continuously deformed into the other without cutting the loop.

## Where topology appears

Topology influences many parts of mathematics:

- **Analysis:** function spaces, convergence, compactness, and continuity.
- **Geometry:** manifolds, curvature, and global structure.
- **Algebra:** topological groups and algebraic invariants.
- **Differential equations:** phase spaces and qualitative behavior of solutions.
- **Complex analysis:** surfaces, coverings, and analytic continuation.
- **Number theory:** topological and geometric methods in arithmetic spaces.

It also appears outside pure mathematics:

- topological data analysis studies the shape of complex datasets;
- physics uses topology in field theory, condensed matter, and the study of defects;
- robotics uses configuration spaces to describe possible positions and motions;
- computer graphics and mesh processing rely on topological structure;
- network science uses related ideas to study connectivity.

These applications are not accidental. Whenever the global arrangement of a system matters more than exact measurements, topology is likely to be relevant.

## What topology teaches us

The deeper lesson of topology is that mathematical structure can exist at different levels.

A geometric object may carry:

- set-theoretic structure,
- topological structure,
- smooth structure,
- metric structure,
- and additional algebraic or geometric structure.

Each level remembers some information and forgets other information. Topology forgets exact measurement while retaining continuity and neighborhood structure.

This act of deliberately forgetting information is powerful. By ignoring irrelevant details, topology reveals which conclusions depend only on the underlying structure of a space.

## Where to go next

A natural route into topology is:

1. sets, functions, images, and preimages;
2. metric spaces;
3. open and closed sets;
4. interior, closure, boundary, and accumulation points;
5. continuous maps and homeomorphisms;
6. bases and subbases;
7. subspace, product, and quotient topologies;
8. connectedness and compactness;
9. separation axioms;
10. an introduction to algebraic topology or manifolds.

Metric spaces are especially useful at the beginning because they connect topology with familiar ideas about distance and convergence. General topology then reveals which results depend on distance and which depend only on open sets.

Topology begins with a simple question—what does continuity really require?—and develops into a language capable of describing spaces throughout modern mathematics.
