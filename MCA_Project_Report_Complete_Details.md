# CHETAN BUSINESS SCHOOL, HUBBALLI
### Department of Master of Computer Applications (MCA)
**Affiliated to Karnatak University, Dharwad | Approved by AICTE, New Delhi**

---

# GRAPHICS ALGORITHM VISUALIZER
### *An Interactive Framework for Real-Time 2D Computer Graphics Algorithm Simulation, Rasterization, and Clipping Analysis*

---

## Academic Project Details
- **Project Title:** Graphics Algorithm Visualizer
- **Course:** Master of Computer Applications (MCA)
- **Institution:** Chetan Business School, Hubballi
- **Project Guide:** Dr. RaviKumar Roogi (Associate Professor & HOD)
- **Contact / Correspondence:** `chaitranavalgund30@gmail.com`
- **Academic Year:** 2024 – 2025

### Project Team Members:
1. **Ananya R Sugandhi**
2. **Chaitra D Navalgund**
3. **Iranna B Kumbar**
4. **Misba Pallan**
5. **Riya V Navade**
6. **Vasanta S Mathad**

---

## 1. Executive Summary & Abstract
In modern visual computing, rasterization (converting geometric mathematical primitives into discrete screen pixels) and clipping (restricting visual objects to defined viewing boundaries) represent the bedrock of computer graphics, CAD systems, video game engines, and graphical user interfaces.

Traditional textbook instruction relies on static diagrams and abstract recurrence relations, leaving computer science and MCA students with conceptual gaps regarding:
1. Why decision parameters ($p_k$, $d_k$) evaluate the sign rather than absolute distances.
2. How integer increment formulas eliminate costly floating-point divisions.
3. How geometric symmetries (such as 8-way circle reflection) reduce computation by 87.5%.
4. How multi-stage pipelines (like Sutherland-Hodgman) regenerate valid enclosed polygon geometry through edge intersections.

The **Graphics Algorithm Visualizer** resolves these educational challenges by providing an interactive, zero-latency visual simulation environment. Developed with **React 19**, **TypeScript**, **HTML5 Canvas**, and **Tailwind CSS**, it grants students and educators complete control over algorithm execution—offering step-by-step single stepping, variable inspection, tabular calculation logs, dynamic parameter adjustments, and side-by-side pseudocode execution tracing.

---

## 2. System Architecture & Tech Stack

| Layer | Technology | Engineering Role & Rationale |
| :--- | :--- | :--- |
| **User Interface** | React 19 (Hooks & Modular Architecture) | Manages state machines, interactive sliders, coordinate inputs, and responsive layout without external state libraries. |
| **Language** | TypeScript | Enforces strict static typing across mathematical models, pixel matrices, clipping boundaries, and step snapshots. |
| **Rendering Engine** | HTML5 Canvas 2D Context | Delivers sub-millisecond redraws, custom Cartesian coordinate transformations, pixel grid rendering, and dynamic scanlines. |
| **Styling** | Tailwind CSS v4 | Provides ultra-clean dark/light aesthetic, high-contrast grid lines, and adaptive responsive layout. |
| **Icons & Design** | Lucide React | Provides clear UI controls for playback (Play, Pause, Step Next, Reset, Speed). |
| **Build Tooling** | Vite | Ultra-fast bundling, Hot Module Replacement, and optimized production builds. |

---

## 3. User Interface Workflow & Architectural Components

The visualizer is partitioned into four synchronized visual zones:

### 3.1 Top Navigation Header
- **Algorithm Selector:** Dropdown to switch seamlessly between 6 core algorithms:
  - Midpoint Circle Drawing Algorithm
  - Midpoint Line Drawing Algorithm
  - Bresenham's Line Drawing Algorithm
  - DDA (Digital Differential Analyzer) Line Algorithm
  - Cohen-Sutherland Line Clipping Algorithm
  - Sutherland-Hodgman Polygon Clipping Algorithm
- **Global Reset & Clear:** Flushes active canvas pixels and resets state machines.
- **Grid Toggle:** Switches Cartesian grid lines and coordinate markers on/off.
- **Theme Toggle:** Flips between dark mode (high-contrast neon pixels) and light mode (academic print layout).
- **Download Project Report:** Triggers immediate download of this official Word (.docx) technical report.
- **Synopsis Modal:** Opens a quick-reference project synopsis with college and team details.

### 3.2 Left Sidebar (Parameter & Playback Controls)
- **Input Controllers:** Context-aware inputs that change dynamically based on the chosen algorithm:
  - *Line Algorithms:* $(X_1, Y_1)$ starting point and $(X_2, Y_2)$ ending point.
  - *Circle Algorithm:* Center coordinates $(X_c, Y_c)$ and Radius $R$.
  - *Clipping Algorithms:* Rectangular window bounds $(X_{min}, Y_{min}, X_{max}, Y_{max})$ and subject vertices.
- **Simulation Speed Slider:** Adjusts step delay between 10ms (rapid execution) and 1000ms (slow pedagogical stepping).
- **Control Buttons:**
  - **Simulate Step-by-Step (Play/Pause):** Starts or stops automated continuous animation.
  - **Step Next:** Advances the algorithm by exactly one discrete iteration.
  - **Reset:** Clears current execution while retaining input parameters.
  - **Run All:** Instantly renders the final completed output.

### 3.3 Central Viewport (2D Canvas Workspace)
- **Pixel Grid:** Displays an integer coordinate plane with origin markers and scale lines.
- **Active Rendering:**
  - Plotted pixels are highlighted with animated glow pulses.
  - For Midpoint Circle, the primary octant $(x, y)$ is rendered with distinct color-coding from the 7 reflected symmetrical pixels.
  - For Clipping algorithms, the clipping window is drawn with dotted boundary guidelines, outside rejected lines in muted red/dashed strokes, and accepted segments in vivid green/cyan.
- **Coordinate Tooltip:** Hovering over any cell reveals its exact $(X, Y)$ Cartesian coordinate.

### 3.4 Right Sidebar (Diagnostics & Analytical Trace Panel)
- **Live Decision Parameter Tracker:** Displays current variables ($p$, $d$, $\Delta x$, $\Delta y$, slope $m$) in real time.
- **Algorithm Pseudocode:** Displays high-level algorithmic pseudocode with active line highlighting corresponding to the current step.
- **Tabular Calculation History:** A scrollable table recording:
  - Iteration step number ($k$)
  - Current pixel $(X_k, Y_k)$
  - Evaluated decision variable
  - Condition check ($p < 0$ or $p \ge 0$)
  - Next selected pixel and incremental variable update.

---

## 4. In-Depth Algorithm Formulations & Derivations

### 4.1 Midpoint Circle Drawing Algorithm
- **Objective:** Render a continuous circular perimeter of radius $r$ centered at $(x_c, y_c)$ using only integer arithmetic.
- **Symmetry Principle:** Circles centered at $(0, 0)$ possess 8-fold symmetry. Computing 45° of the perimeter (from $x = 0$ to $x = y$) allows mirroring to:
  $$(x, y), (y, x), (-x, y), (-y, x), (-x, -y), (-y, -x), (x, -y), (y, -x)$$
- **Mathematical Derivation:**
  The implicit function is $F(x, y) = x^2 + y^2 - r^2$.
  Given current pixel $(x_k, y_k)$, the next candidate pixels are East $E = (x_k + 1, y_k)$ and South-East $SE = (x_k + 1, y_k - 1)$.
  The midpoint between them is $M = (x_k + 1, y_k - \frac{1}{2})$.
  The decision parameter $p_k = F(M) = (x_k + 1)^2 + (y_k - \frac{1}{2})^2 - r^2$.
  - Initial parameter at $(0, r)$:
    $$p_0 = F(1, r - \frac{1}{2}) = 1^2 + (r - \frac{1}{2})^2 - r^2 = \frac{5}{4} - r \approx 1 - r \quad (\text{since } r \in \mathbb{Z})$$
  - If $p_k < 0$: $M$ is inside the circle $\implies$ Choose $E = (x_k + 1, y_k)$.
    $$p_{k+1} = p_k + 2x_{k+1} + 1$$
  - If $p_k \ge 0$: $M$ is outside or on the circle $\implies$ Choose $SE = (x_k + 1, y_k - 1)$.
    $$p_{k+1} = p_k + 2x_{k+1} + 1 - 2y_{k+1}$$

#### Numerical Example ($r = 6$, Center = $(0, 0)$):
- $p_0 = 1 - 6 = -5$.
- **Step 1:** $p_0 = -5 < 0 \implies$ Pick $E: (1, 6)$.
  $$p_1 = -5 + 2(1) + 1 = -2$$
- **Step 2:** $p_1 = -2 < 0 \implies$ Pick $E: (2, 6)$.
  $$p_2 = -2 + 2(2) + 1 = 3$$
- **Step 3:** $p_2 = 3 \ge 0 \implies$ Pick $SE: (3, 5)$.
  $$p_3 = 3 + 2(3) + 1 - 2(5) = 0$$
- **Step 4:** $p_3 = 0 \ge 0 \implies$ Pick $SE: (4, 4)$.
  $$x = 4 = y \implies \text{Boundary reached. Loop terminates.}$$

---

### 4.2 Midpoint Line Drawing Algorithm
- **Objective:** Rasterize a line between $(x_0, y_0)$ and $(x_1, y_1)$ for $0 \le m \le 1$.
- **Implicit Line Equation:**
  $$F(x, y) = ax + by + c = 0 \quad \text{where } a = \Delta y, \; b = -\Delta x, \; c = \Delta x \cdot y_0 - \Delta y \cdot x_0$$
- **Decision Parameter:**
  Midpoint between $E = (x_k + 1, y_k)$ and $NE = (x_k + 1, y_k + 1)$ is $M = (x_k + 1, y_k + \frac{1}{2})$.
  $$d_k = F(x_k + 1, y_k + \frac{1}{2}) = a(x_k + 1) + b(y_k + \frac{1}{2}) + c$$
  - Initial value: $d_0 = a + \frac{b}{2} = \Delta y - \frac{\Delta x}{2}$. Multiplying by 2 to clear fractions:
    $$d_0 = 2\Delta y - \Delta x$$
  - If $d_k < 0$: $M$ is below the line $\implies$ Pick $NE$:
    $$d_{k+1} = d_k + 2(\Delta y - \Delta x)$$
  - If $d_k \ge 0$: $M$ is above the line $\implies$ Pick $E$:
    $$d_{k+1} = d_k + 2\Delta y$$

---

### 4.3 Bresenham's Line Algorithm
- **Objective:** Pure integer incremental line scan-conversion by comparing distances $d_1$ and $d_2$ from the mathematical line to upper and lower pixels.
- **Decision Parameter:**
  $$p_k = \Delta x(d_1 - d_2)$$
  - Initial decision variable:
    $$p_0 = 2\Delta y - \Delta x$$
  - If $p_k < 0$: Plot $(x_k + 1, y_k)$, update $p_{k+1} = p_k + 2\Delta y$.
  - If $p_k \ge 0$: Plot $(x_k + 1, y_k + 1)$, update $p_{k+1} = p_k + 2\Delta y - 2\Delta x$.

---

### 4.4 DDA (Digital Differential Analyzer) Line Algorithm
- **Objective:** Scan-conversion using differential step equation $\frac{dy}{dx} = m$.
- **Formulas:**
  $$\Delta x = x_2 - x_1, \quad \Delta y = y_2 - y_1$$
  $$\text{Steps} = \max(|\Delta x|, |\Delta y|)$$
  $$x_{\text{inc}} = \frac{\Delta x}{\text{Steps}}, \quad y_{\text{inc}} = \frac{\Delta y}{\text{Steps}}$$
  $$x_{k+1} = x_k + x_{\text{inc}}, \quad y_{k+1} = y_k + y_{\text{inc}}$$
  $$\text{Plot}(\text{round}(x), \text{round}(y))$$

---

### 4.5 Cohen-Sutherland Line Clipping Algorithm
- **Objective:** Clip arbitrary lines against a rectangular window $[X_{min}, Y_{min}] \times [X_{max}, Y_{max}]$.
- **4-Bit Outcode Structure:** `[TOP, BOTTOM, RIGHT, LEFT]`
  - `Bit 1 (Top):` $y > Y_{max}$
  - `Bit 2 (Bottom):` $y < Y_{min}$
  - `Bit 3 (Right):` $x > X_{max}$
  - `Bit 4 (Left):` $x < X_{min}$
- **Intersection Tests:**
  1. **Trivial Accept:** `code1 | code2 == 0000` (both endpoints completely inside).
  2. **Trivial Reject:** `code1 & code2 != 0000` (both endpoints share an outside region).
  3. **Clipping:** When neither holds, choose an endpoint with a non-zero code and calculate boundary intersection using line slope $m = \frac{y_2 - y_1}{x_2 - x_1}$.

---

### 4.6 Sutherland-Hodgman Polygon Clipping Algorithm
- **Objective:** Clip a planar polygon against a convex clipping polygon through a 4-stage pipeline.
- **Boundary Processing Pipeline:** Left Edge $\to$ Right Edge $\to$ Bottom Edge $\to$ Top Edge.
- **Vertex Transition Rules:**
  - **In $\to$ In:** Output vertex $V_2$.
  - **In $\to$ Out:** Calculate and output intersection $I$.
  - **Out $\to$ Out:** Discard (output nothing).
  - **Out $\to$ In:** Calculate and output intersection $I$, then output vertex $V_2$.

---

## 5. Comparative Evaluation Matrix

| Metric | DDA Line | Bresenham Line | Midpoint Line | Midpoint Circle | Cohen-Sutherland | Sutherland-Hodgman |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Arithmetic Type** | Floating-Point | Pure Integer | Pure Integer | Pure Integer | Bitwise + Float | Vector / Geometry |
| **Time Complexity** | $O(N)$ | $O(N)$ | $O(N)$ | $O(R)$ | $O(1)$ avg / $O(N)$ | $O(E \times V)$ |
| **Space Complexity** | $O(1)$ | $O(1)$ | $O(1)$ | $O(1)$ | $O(1)$ | $O(V)$ |
| **Hardware Efficiency** | Low (FPU overhead) | Maximum (ALU shifts) | Maximum (ALU shifts) | Maximum (ALU shifts) | Very High | High |
| **Primary Use Case** | Conceptual demos | Fast line raster | General curves | Fast circle raster | Window line clipping | Polygon shape clipping |

---

## 6. Viva Voce Examination Questions & Model Answers

### Q1: What is the main distinction between DDA and Bresenham's algorithms?
**Model Answer:** DDA calculates pixel positions using floating-point increments ($\Delta x / \text{steps}$, $\Delta y / \text{steps}$) and requires rounding at each step, making it computationally slower and susceptible to cumulative floating-point errors. Bresenham's algorithm uses implicit error terms scaled by $\Delta x$ to operate entirely in integer arithmetic (only additions, subtractions, and bit shifts), making it significantly faster and hardware-friendly.

### Q2: Why is the initial decision parameter for Midpoint Circle taken as $1 - r$ instead of $\frac{5}{4} - r$?
**Model Answer:** Evaluating the implicit circle equation at $(1, r - 0.5)$ yields $p_0 = \frac{5}{4} - r = 1.25 - r$. Because the radius $r$ is always an integer, $1.25 - r$ will be non-integer. However, since pixel decisions depend solely on whether $p_0 < 0$ or $p_0 \ge 0$, and $r$ is an integer, replacing $1.25 - r$ with $1 - r$ changes no sign decisions while allowing pure integer arithmetic.

### Q3: How does Cohen-Sutherland achieve instantaneous rejection of lines?
**Model Answer:** By computing a 4-bit Outcode for each endpoint representing its spatial position relative to the 4 window boundaries. If the bitwise AND of both endpoint outcodes is non-zero (`code1 & code2 != 0`), it mathematically proves that both endpoints lie entirely in the same outside half-space (e.g., both are above the top edge), so the line can be discarded without calculating any intersections.

### Q4: Why can Sutherland-Hodgman produce erroneous results on concave polygons?
**Model Answer:** Sutherland-Hodgman assumes convex clipping regions and outputs a single continuous vertex sequence. If a subject polygon is concave or split into multiple disjoint components by the clipping boundary, the algorithm may connect the separate components with spurious bridging edges.

---

## 7. Tomorrow's Oral Presentation Script

- **Slide 1 / Introduction (1 min):**
  > "Respected examiners and Dr. RaviKumar Roogi sir, our team from Chetan Business School, Hubballi, is pleased to present our MCA project: the Graphics Algorithm Visualizer. Computer graphics textbooks often teach rasterization and clipping as abstract formulas. Our project brings these concepts to life as an interactive, real-time visual learning suite."

- **Slide 2 / Live Demonstration (2-3 mins):**
  > "Let us examine the Midpoint Circle Algorithm. When we set radius 6 and click 'Simulate Step-by-Step', watch the central canvas: the system calculates points only in the first 45-degree octant and uses 8-way symmetry to simultaneously render all 8 octants. Notice the right panel tracking the decision variable $p$, dynamically showing when $p < 0$ picks the East pixel and $p \ge 0$ picks the South-East pixel."

- **Slide 3 / Clipping Showcase (2 mins):**
  > "Next, in Cohen-Sutherland Line Clipping, the canvas displays the 4-bit Outcodes for each region. The visualizer demonstrates trivial acceptance via bitwise OR and trivial rejection via bitwise AND, before stepping through boundary intersection calculations for partial segments."

- **Slide 4 / Conclusion & Viva Invitation (1 min):**
  > "By engineering this visualizer using React 19, TypeScript, and HTML5 Canvas, we have created an open, extensible, and high-performance laboratory tool for computer graphics education. We welcome your questions."
