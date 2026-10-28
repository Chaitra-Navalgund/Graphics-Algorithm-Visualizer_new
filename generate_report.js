// Script to generate the comprehensive Word (.doc) report for Graphics Algorithm Visualizer
import fs from 'fs';
import path from 'path';

const htmlContent = `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset="utf-8">
<title>Graphics Algorithm Visualizer - Complete Technical Project Report</title>
<!--[if gte mso 9]>
<xml>
<w:WordDocument>
<w:View>Print</w:View>
<w:Zoom>100</w:Zoom>
<w:DoNotOptimizeForBrowser/>
</w:WordDocument>
</xml>
<![endif]-->
<style>
  @page {
    size: 8.5in 11in;
    margin: 1.0in 1.0in 1.0in 1.0in;
    mso-header-margin: 0.5in;
    mso-footer-margin: 0.5in;
  }
  body {
    font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
    font-size: 11pt;
    line-height: 1.45;
    color: #1e293b;
    background-color: #ffffff;
  }
  .title-page {
    text-align: center;
    padding-top: 30pt;
    padding-bottom: 40pt;
    border-bottom: 2pt solid #0284c7;
    margin-bottom: 30pt;
  }
  .college-name {
    font-size: 18pt;
    font-weight: bold;
    color: #0369a1;
    letter-spacing: 1pt;
    text-transform: uppercase;
    margin-bottom: 4pt;
  }
  .college-sub {
    font-size: 10pt;
    color: #64748b;
    margin-bottom: 2pt;
  }
  .college-addr {
    font-size: 9.5pt;
    color: #94a3b8;
    margin-bottom: 24pt;
  }
  .project-title {
    font-size: 24pt;
    font-weight: 800;
    color: #0f172a;
    margin: 18pt 0 8pt 0;
  }
  .project-subtitle {
    font-size: 13pt;
    color: #0284c7;
    font-weight: 600;
    margin-bottom: 24pt;
  }
  .academic-meta-box {
    margin: 20pt auto;
    width: 90%;
    border: 1pt solid #cbd5e1;
    background-color: #f8fafc;
    padding: 14pt;
    border-radius: 6pt;
    text-align: left;
  }
  h1 {
    font-size: 18pt;
    color: #0369a1;
    border-bottom: 1.5pt solid #0284c7;
    padding-bottom: 4pt;
    margin-top: 24pt;
    margin-bottom: 10pt;
    page-break-before: auto;
  }
  h2 {
    font-size: 14pt;
    color: #0f172a;
    border-left: 3.5pt solid #0284c7;
    padding-left: 6pt;
    margin-top: 16pt;
    margin-bottom: 6pt;
  }
  h3 {
    font-size: 11.5pt;
    color: #334155;
    margin-top: 12pt;
    margin-bottom: 4pt;
    font-weight: 700;
  }
  p {
    margin: 4pt 0 8pt 0;
    text-align: justify;
  }
  ul, ol {
    margin: 4pt 0 10pt 20pt;
  }
  li {
    margin-bottom: 3pt;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 10pt 0 16pt 0;
    font-size: 10pt;
  }
  th {
    background-color: #0284c7;
    color: #ffffff;
    font-weight: bold;
    padding: 6pt 8pt;
    border: 1pt solid #cbd5e1;
    text-align: left;
  }
  td {
    padding: 5pt 8pt;
    border: 1pt solid #cbd5e1;
    vertical-align: top;
  }
  tr:nth-child(even) td {
    background-color: #f8fafc;
  }
  code {
    font-family: 'Consolas', 'Courier New', monospace;
    font-size: 9.5pt;
    background-color: #f1f5f9;
    padding: 1.5pt 4pt;
    border-radius: 3pt;
    color: #0f172a;
  }
  pre {
    font-family: 'Consolas', 'Courier New', monospace;
    font-size: 9.5pt;
    background-color: #0f172a;
    color: #f8fafc;
    padding: 10pt;
    border-radius: 5pt;
    overflow-x: auto;
    margin: 8pt 0 12pt 0;
    line-height: 1.4;
  }
  .highlight-box {
    background-color: #f0f9ff;
    border-left: 4pt solid #0284c7;
    padding: 8pt 12pt;
    margin: 10pt 0;
    border-radius: 0 4pt 4pt 0;
  }
  .badge {
    display: inline-block;
    padding: 2pt 6pt;
    font-size: 9pt;
    font-weight: bold;
    border-radius: 3pt;
    background-color: #e0f2fe;
    color: #0369a1;
  }
  .qa-card {
    background-color: #f8fafc;
    border: 1pt solid #e2e8f0;
    border-radius: 5pt;
    padding: 10pt;
    margin-bottom: 10pt;
  }
  .qa-question {
    font-weight: bold;
    color: #0369a1;
    font-size: 11pt;
    margin-bottom: 4pt;
  }
  .qa-answer {
    color: #334155;
    font-size: 10.5pt;
  }
</style>
</head>
<body>

<!-- Title Page -->
<div class="title-page">
  <div class="college-name">CHETAN BUSINESS SCHOOL</div>
  <div class="college-sub">(Affiliated to Karnatak University, Dharwad & Recognized by AICTE, New Delhi)</div>
  <div class="college-addr">Tajnagar, Hubballi – 580031, Karnataka, India</div>
  
  <div style="margin: 20pt 0; height: 1pt; background-color: #e2e8f0;"></div>

  <div class="project-title">GRAPHICS ALGORITHM VISUALIZER</div>
  <div class="project-subtitle">Interactive Educational Web Platform for Raster Graphics and Clipping Algorithms</div>

  <div class="academic-meta-box">
    <table style="margin: 0; width: 100%; border: none;">
      <tr style="background: transparent;">
        <td style="border: none; width: 50%;">
          <strong>Program:</strong> Master of Computer Application (MCA)<br>
          <strong>Course:</strong> Computer Graphics & Visualization<br>
          <strong>Academic Year:</strong> 2024–2026
        </td>
        <td style="border: none; width: 50%;">
          <strong>Project Guide:</strong><br>
          <span style="font-size: 12pt; color: #0369a1; font-weight: bold;">Dr. RaviKumar Roogi</span><br>
          Department of Computer Applications
        </td>
      </tr>
    </table>
    <div style="margin-top: 12pt;">
      <strong>Project Associates (Student Team):</strong>
      <table style="margin-top: 6pt; width: 100%;">
        <thead>
          <tr>
            <th>UUCMS Number</th>
            <th>Candidate Name</th>
            <th>Role & Contribution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>P02DR25S126002</code></td>
            <td><strong>Ananya R Sugandhi</strong></td>
            <td>Algorithm Formulation & Mathematical Verification</td>
          </tr>
          <tr>
            <td><code>P02DR25S126006</code></td>
            <td><strong>Chaitra D Navalgund</strong></td>
            <td>Interactive Grid Canvas & Rendering Engine</td>
          </tr>
          <tr>
            <td><code>P02DR25S126010</code></td>
            <td><strong>Iranna B Kumbar</strong></td>
            <td>Polygon Clipping & Sutherland-Hodgman Implementation</td>
          </tr>
          <tr>
            <td><code>P02DR25S126015</code></td>
            <td><strong>Misba Pallan</strong></td>
            <td>Midpoint Circle & 8-Way Symmetry Engine</td>
          </tr>
          <tr>
            <td><code>P02DR25S126023</code></td>
            <td><strong>Riya V Navade</strong></td>
            <td>Step-by-Step Playback Controller & State Management</td>
          </tr>
          <tr>
            <td><code>P02DR25S126037</code></td>
            <td><strong>Vasanta S Mathad</strong></td>
            <td>UI Design, Steps Table, & Vector SVG Export</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<!-- Page Break -->
<br clear="all" style="page-break-before:always" />

<!-- Table of Contents -->
<h1>Table of Contents</h1>
<ol>
  <li><strong>Executive Summary & Problem Statement</strong></li>
  <li><strong>System Architecture & Technical Stack</strong></li>
  <li><strong>Core Graphics Algorithms & Mathematical Derivations</strong>
    <ul>
      <li>3.1 Midpoint Circle Drawing Algorithm (Deep Dive & Step Trace)</li>
      <li>3.2 Midpoint Line Drawing Algorithm</li>
      <li>3.3 Bresenham’s Line Drawing Algorithm</li>
      <li>3.4 Digital Differential Analyzer (DDA) Line Algorithm</li>
      <li>3.5 Cohen–Sutherland Line Clipping Algorithm</li>
      <li>3.6 Sutherland–Hodgman Polygon Clipping Algorithm</li>
    </ul>
  </li>
  <li><strong>User Interface (UI/UX) & Interaction Mechanics</strong></li>
  <li><strong>Component Hierarchy & Source Code Architecture</strong></li>
  <li><strong>Presentation Script & Viva Voce Defense Q&A</strong></li>
  <li><strong>Academic References & Bibliography</strong></li>
</ol>

<br clear="all" style="page-break-before:always" />

<!-- Section 1 -->
<h1>1. Executive Summary & Problem Statement</h1>
<div class="highlight-box">
  <strong>Abstract:</strong> The <em>Graphics Algorithm Visualizer</em> is an interactive educational web application designed for students and educators in Computer Science and Computer Applications (MCA). It transforms abstract mathematical rasterization formulations into an animated, step-by-step visual experience.
</div>

<h2>1.1 Problem Statement</h2>
<p>
  Computer graphics algorithms form the bedrock of digital displays, computer-aided design (CAD), video game engines, and graphical operating systems. Traditionally, these algorithms are taught using static blackboards, pseudocode listings, and final output screenshots.
</p>
<p>
  This approach introduces severe cognitive hurdles:
</p>
<ul>
  <li><strong>Lack of intermediate visibility:</strong> Students struggle to understand how decision parameters ($p_k$, $d_k$) dynamically dictate whether the rasterizer selects a horizontal pixel (East) or a diagonal pixel (South-East / North-East).</li>
  <li><strong>Symmetry abstraction:</strong> In circle drawing, the leap from computing a single $45^\circ$ octant to simultaneously plotting eight symmetrical points across all four quadrants is difficult to visualize without real-time color coding.</li>
  <li><strong>Clipping mechanics:</strong> Understanding outcode bitwise operations (AND logic) and boundary edge intersections in polygon clipping requires visualizing spatial half-planes, which static textbooks cannot convey dynamically.</li>
</ul>

<h2>1.2 Proposed Solution</h2>
<p>
  The proposed project solves these hurdles by building a responsive, client-side, zero-latency visualization suite. Users can input arbitrary coordinates, trigger auto-play animations, single-step forward and backward, inspect live calculated variables, jump to any step in an interactive data table, and export vector SVG illustrations for academic reports.
</p>

<!-- Section 2 -->
<h1>2. System Architecture & Technical Stack</h1>
<p>
  The system is built adhering to modern software engineering standards, utilizing modular architecture, strong type safety, and efficient rendering paradigms.
</p>

<table>
  <thead>
    <tr>
      <th>Layer / Component</th>
      <th>Technology Selected</th>
      <th>Rationale & Technical Benefit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Core Framework</strong></td>
      <td>React 19 (SPA)</td>
      <td>Declarative state-driven UI, immediate component re-rendering upon input state changes.</td>
    </tr>
    <tr>
      <td><strong>Language</strong></td>
      <td>TypeScript 7.0</td>
      <td>Strict type checking for 2D points, vector bounds, polygon vertices, and step records.</td>
    </tr>
    <tr>
      <td><strong>Styling & Design System</strong></td>
      <td>Tailwind CSS v4</td>
      <td>Utility-first responsive layouts, high-contrast dark theme optimized for technical clarity.</td>
    </tr>
    <tr>
      <td><strong>Build Tool</strong></td>
      <td>Vite 8.3</td>
      <td>Near-instant Hot Module Replacement (HMR) and optimized esbuild bundling.</td>
    </tr>
    <tr>
      <td><strong>Raster Rendering</strong></td>
      <td>HTML5 Canvas 2D API</td>
      <td>High-performance custom grid drawing, coordinate system translation, pan and zoom transforms.</td>
    </tr>
    <tr>
      <td><strong>Vector Graphics</strong></td>
      <td>Raw SVG Serializer</td>
      <td>Direct mathematical export of canvas elements into crisp, scalable vector graphics.</td>
    </tr>
    <tr>
      <td><strong>Iconography</strong></td>
      <td>Lucide React</td>
      <td>Clean, accessible, lightweight vector iconography for playback and modal dialogs.</td>
    </tr>
  </tbody>
</table>

<h2>2.1 Decoupled Calculation Engine Pattern</h2>
<p>
  The application follows a strict <strong>Calculation vs. Presentation Separation</strong>:
</p>
<ol>
  <li><strong>Pure Mathematical Functions:</strong> All algorithms (<code>runDDA</code>, <code>runBresenham</code>, <code>runMidpointLine</code>, <code>runMidpointCircle</code>, <code>runCohenSutherland</code>, <code>runSutherlandHodgman</code>) are written as pure functions with zero UI dependencies. They accept input coordinates and return an immutable array of step objects containing intermediate variables ($x$, $y$, $p_k$, $d$, action strings, active code lines, and human-readable explanations).</li>
  <li><strong>Reactive Memoization:</strong> In <code>App.tsx</code>, algorithm execution is wrapped in React <code>useMemo</code> hooks. Re-computation occurs only when user input parameters change, ensuring zero unnecessary recalculation during playback scrubbing.</li>
  <li><strong>Bidirectional Synchronization:</strong> The playback slider, next/previous buttons, active pseudocode line highlighter, dynamic coordinate tooltip, and steps table are all driven by a single integer state: <code>currentStep</code>. Changing the step in any widget instantaneously synchronizes all other widgets.</li>
</ol>

<!-- Section 3 -->
<h1>3. Core Graphics Algorithms & Mathematical Derivations</h1>

<h2>3.1 Midpoint Circle Drawing Algorithm (Deep Dive)</h2>
<p>
  The Midpoint Circle Algorithm rasterizes a circle of radius $r$ centered at $(x_c, y_c)$ using only incremental integer additions, completely eliminating computationally expensive trigonometric functions ($\sin, \cos$) and square roots ($\sqrt{r^2 - x^2}$).
</p>

<h3>Mathematical Foundation:</h3>
<p>
  Define the implicit circle function:
</p>
<pre>F(x, y) = x^2 + y^2 - r^2</pre>
<p>For any point $(x, y)$:</p>
<ul>
  <li>$F(x, y) &lt; 0 \implies$ The point is <strong>inside</strong> the circle boundary.</li>
  <li>$F(x, y) = 0 \implies$ The point is <strong>on</strong> the circle boundary.</li>
  <li>$F(x, y) &gt; 0 \implies$ The point is <strong>outside</strong> the circle boundary.</li>
</ul>

<h3>The Midpoint Principle:</h3>
<p>
  We calculate the first octant from $x = 0$ to $x = y$ (where slope $m$ goes from $0$ to $-1$).
  At step $k$, having plotted pixel $(x_k, y_k)$, the next candidate pixels are:
</p>
<ul>
  <li><strong>East (E):</strong> $(x_k + 1, y_k)$</li>
  <li><strong>South-East (SE):</strong> $(x_k + 1, y_k - 1)$</li>
</ul>
<p>
  The midpoint $M$ between these two candidates is:
</p>
<pre>M = (x_k + 1, y_k - 0.5)</pre>
<p>
  We evaluate the circle function at this midpoint:
</p>
<pre>p_k = F(x_k + 1, y_k - 0.5) = (x_k + 1)^2 + (y_k - 0.5)^2 - r^2</pre>

<h3>Initial Decision Parameter ($p_0$):</h3>
<p>Starting at the top of the circle $(0, r)$:</p>
<pre>
p_0 = F(0 + 1, r - 0.5)
    = 1^2 + (r - 0.5)^2 - r^2
    = 1 + r^2 - r + 0.25 - r^2
    = 5/4 - r
</pre>
<p>
  Since $r$ is an integer, if $5/4 - r$ is rounded for integer arithmetic without changing the sign of any subsequent test, we define:
</p>
<div class="highlight-box">
  <strong>p_0 = 1 - r</strong> &nbsp;&nbsp;(for integer $r$)
</div>

<h3>Recurrence Relations for Consecutive Steps:</h3>
<p>The difference $\Delta p = p_{k+1} - p_k$ is derived as follows:</p>
<ol>
  <li><strong>If $p_k &lt; 0$ (Midpoint is inside circle):</strong><br>
    The circle boundary passes above the midpoint, closer to candidate <strong>E</strong> $(x_k + 1, y_k)$.<br>
    $y_{k+1} = y_k$<br>
    <code>p_{k+1} = p_k + 2x_{k+1} + 1</code>
  </li>
  <li><strong>If $p_k \ge 0$ (Midpoint is outside or on circle):</strong><br>
    The circle boundary passes below or through the midpoint, closer to candidate <strong>SE</strong> $(x_k + 1, y_k - 1)$.<br>
    $y_{k+1} = y_k - 1$<br>
    <code>p_{k+1} = p_k + 2x_{k+1} + 1 - 2y_{k+1}</code>
  </li>
</ol>

<h3>8-Way Symmetry Mapping:</h3>
<p>
  Circles exhibit eight-fold symmetry. For every computed point $(x, y)$ in the first octant, eight points are plotted simultaneously around center $(x_c, y_c)$:
</p>
<table>
  <thead>
    <tr>
      <th>Octant</th>
      <th>Angle Range</th>
      <th>Plotted Coordinate $(X, Y)$</th>
      <th>Color in Visualizer</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Octant 1</td><td>$90^\circ \rightarrow 45^\circ$</td><td>$(x_c + x, y_c + y)$</td><td>Sky Blue (#38bdf8)</td></tr>
    <tr><td>Octant 2</td><td>$45^\circ \rightarrow 0^\circ$</td><td>$(x_c + y, y_c + x)$</td><td>Emerald (#34d399)</td></tr>
    <tr><td>Octant 3</td><td>$0^\circ \rightarrow -45^\circ$</td><td>$(x_c - y, y_c + x)$</td><td>Violet (#a78bfa)</td></tr>
    <tr><td>Octant 4</td><td>$-45^\circ \rightarrow -90^\circ$</td><td>$(x_c - x, y_c + y)$</td><td>Pink (#f472b6)</td></tr>
    <tr><td>Octant 5</td><td>$-90^\circ \rightarrow -135^\circ$</td><td>$(x_c - x, y_c - y)$</td><td>Amber (#fbbf24)</td></tr>
    <tr><td>Octant 6</td><td>$-135^\circ \rightarrow -180^\circ$</td><td>$(x_c - y, y_c - x)$</td><td>Orange (#fb923c)</td></tr>
    <tr><td>Octant 7</td><td>$-180^\circ \rightarrow -225^\circ$</td><td>$(x_c + y, y_c - x)$</td><td>Teal (#2dd4bf)</td></tr>
    <tr><td>Octant 8</td><td>$-225^\circ \rightarrow -270^\circ$</td><td>$(x_c + x, y_c - y)$</td><td>Indigo (#818cf8)</td></tr>
  </tbody>
</table>

<h3>Example Trace: Center $(6, 20)$, Radius $r = 4$</h3>
<table>
  <thead>
    <tr>
      <th>k</th>
      <th>Point $(x, y)$</th>
      <th>$p_k$</th>
      <th>Condition</th>
      <th>Selected Pixel</th>
      <th>$p_{k+1}$ Calculation</th>
      <th>Octant 1 Center Plot $(6+x, 20+y)$</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>$(0, 4)$</td>
      <td>$-3$</td>
      <td>$p_0 = 1 - 4 = -3 &lt; 0$</td>
      <td>East (E)</td>
      <td>$-3 + 2(1) + 1 = 0$</td>
      <td>$(6, 24)$</td>
    </tr>
    <tr>
      <td>1</td>
      <td>$(1, 4)$</td>
      <td>$0$</td>
      <td>$p_1 \ge 0$</td>
      <td>South-East (SE)</td>
      <td>$0 + 2(2) + 1 - 2(3) = -1$</td>
      <td>$(7, 24)$</td>
    </tr>
    <tr>
      <td>2</td>
      <td>$(2, 3)$</td>
      <td>$-1$</td>
      <td>$p_2 &lt; 0$</td>
      <td>East (E)</td>
      <td>$-1 + 2(3) + 1 = 6$</td>
      <td>$(8, 23)$</td>
    </tr>
    <tr>
      <td>3</td>
      <td>$(3, 3)$</td>
      <td>$6$</td>
      <td>$x = y = 3$ (Boundary reached)</td>
      <td>Complete</td>
      <td>Stop loop ($x \le y$)</td>
      <td>$(9, 23)$</td>
    </tr>
  </tbody>
</table>

<br clear="all" style="page-break-before:always" />

<!-- Section 3.2 to 3.6 -->
<h2>3.2 Midpoint Line Drawing Algorithm</h2>
<p>
  Similar to circle generation, the Midpoint Line Algorithm determines whether to advance horizontally or diagonally by testing the implicit line equation:
</p>
<pre>F(x, y) = ax + by + c = 0</pre>
<p>
  Where $a = \Delta y$, $b = -\Delta x$, and $c = -\Delta y \cdot x_1 + \Delta x \cdot y_1$.
</p>
<ul>
  <li>Initial decision parameter: <code>d_0 = 2 * |dy| - |dx|</code></li>
  <li>If $d &lt; 0$: Midpoint lies above the line. The line is closer to <strong>East (E)</strong>. Advance $x$, keep $y$. Update: <code>d_{next} = d + 2 * |dy|</code></li>
  <li>If $d \ge 0$: Midpoint lies below the line. The line is closer to <strong>North-East (NE)</strong>. Advance both $x$ and $y$. Update: <code>d_{next} = d + 2 * |dy| - 2 * |dx|</code></li>
  <li>For steep lines ($|m| &gt; 1$), the driving axis switches to $Y$, incrementing $y$ every step and conditionally incrementing $x$.</li>
</ul>

<h2>3.3 Bresenham’s Line Drawing Algorithm</h2>
<p>
  Jack E. Bresenham (1965) introduced the definitive incremental integer line rasterization algorithm. It tracks the difference between vertical distances from candidate pixels to the continuous line ($d_1 - d_2$). Multiplying by $\Delta x$ yields purely integer arithmetic.
</p>
<ul>
  <li>Decision parameter: <code>p_0 = 2 * dy - dx</code></li>
  <li>If $p_k &lt; 0 \implies p_{k+1} = p_k + 2\Delta y$, next pixel is $(x_k + 1, y_k)$</li>
  <li>If $p_k \ge 0 \implies p_{k+1} = p_k + 2\Delta y - 2\Delta x$, next pixel is $(x_k + 1, y_k + 1)$</li>
</ul>

<h2>3.4 Digital Differential Analyzer (DDA) Algorithm</h2>
<p>
  DDA is a scan-conversion line algorithm based on calculating either $\Delta x$ or $\Delta y$ using the differential equations $dy = m \cdot dx$ or $dx = dy / m$.
</p>
<ul>
  <li>Number of steps: <code>steps = max(|x2 - x1|, |y2 - y1|)</code></li>
  <li>Increment per step: <code>xInc = dx / steps</code>, <code>yInc = dy / steps</code></li>
  <li>Plot coordinate: <code>(round(x), round(y))</code></li>
  <li><strong>Trade-off:</strong> Requires floating-point arithmetic and rounding operations at every step, making it slower in hardware compared to integer-only algorithms.</li>
</ul>

<h2>3.5 Cohen–Sutherland Line Clipping Algorithm</h2>
<p>
  Clips line segments against a rectangular window $[x_{min}, x_{max}] \times [y_{min}, y_{max}]$ using 4-bit region outcodes: <strong>[TOP, BOTTOM, RIGHT, LEFT]</strong>.
</p>
<ul>
  <li>Bit 3 (Top): $y &gt; y_{max}$</li>
  <li>Bit 2 (Bottom): $y &lt; y_{min}$</li>
  <li>Bit 1 (Right): $x &gt; x_{max}$</li>
  <li>Bit 0 (Left): $x &lt; x_{min}$</li>
</ul>
<p>
  <strong>Decision logic:</strong>
</p>
<ol>
  <li><strong>Trivial Accept:</strong> <code>code1 | code2 == 0000</code> (Both endpoints inside the window).</li>
  <li><strong>Trivial Reject:</strong> <code>code1 &amp; code2 != 0000</code> (Both endpoints lie in the same outside half-plane).</li>
  <li><strong>Partial Clipping:</strong> Find an endpoint outside the window, calculate its intersection with the corresponding window boundary line ($x = x_{min/max}$ or $y = y_{min/max}$), replace that endpoint with the intersection point, and re-evaluate the outcode until trivial accept or reject occurs.</li>
</ol>

<h2>3.6 Sutherland–Hodgman Polygon Clipping Algorithm</h2>
<p>
  Clips an arbitrary polygon against a convex window by processing all polygon vertices through a pipeline of four infinite boundary edges in order: <strong>LEFT &rarr; RIGHT &rarr; BOTTOM &rarr; TOP</strong>.
</p>
<p>
  For each directed polygon edge connecting starting vertex $S$ to ending vertex $P$, one of four fundamental cases applies:
</p>
<table>
  <thead>
    <tr>
      <th>Case Number</th>
      <th>Edge Traversal</th>
      <th>Geometric Situation</th>
      <th>Vertex Output to Next Stage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Case 1</strong></td>
      <td>Inside &rarr; Inside</td>
      <td>Entire edge is within the boundary half-plane</td>
      <td>Output <strong>P</strong></td>
    </tr>
    <tr>
      <td><strong>Case 2</strong></td>
      <td>Inside &rarr; Outside</td>
      <td>Polygon edge leaves the visible area</td>
      <td>Output Intersection Point <strong>I</strong></td>
    </tr>
    <tr>
      <td><strong>Case 3</strong></td>
      <td>Outside &rarr; Outside</td>
      <td>Entire edge lies outside the visible area</td>
      <td>Output <strong>None</strong></td>
    </tr>
    <tr>
      <td><strong>Case 4</strong></td>
      <td>Outside &rarr; Inside</td>
      <td>Polygon edge enters the visible area</td>
      <td>Output Intersection <strong>I</strong>, then Vertex <strong>P</strong></td>
    </tr>
  </tbody>
</table>

<br clear="all" style="page-break-before:always" />

<!-- Section 4 -->
<h1>4. User Interface (UI/UX) & Interaction Mechanics</h1>
<p>
  The interface is architected for maximum clarity, responsive behavior across mobile, tablet, and desktop viewports, and zero-distraction presentation.
</p>

<h2>4.1 The 3-Zone Top Navigation Bar</h2>
<ul>
  <li><strong>Zone 1 (Identity):</strong> Pulsing visualizer status indicator, application title, and academic institution badge.</li>
  <li><strong>Zone 2 (Algorithm Switcher):</strong> Segmented desktop pill bar and mobile dropdown selector allowing instantaneous switching between DDA, Bresenham, Midpoint Line, Midpoint Circle, Cohen–Sutherland, and Sutherland–Hodgman.</li>
  <li><strong>Zone 3 (Utility Actions):</strong>
    <ul>
      <li><strong>Download Word Report (.doc):</strong> Downloads this complete technical dossier formatted for Word.</li>
      <li><strong>Export SVG:</strong> Generates and exports scalable vector graphics of the canvas.</li>
      <li><strong>Project Synopsis:</strong> Opens the academic credentials modal with guidance credits and student register numbers.</li>
    </ul>
  </li>
</ul>

<h2>4.2 The 3-Column Layout Architecture</h2>
<ol>
  <li><strong>Left Column (Control Panel):</strong>
    <ul>
      <li>Coordinate numeric inputs with instant validation (prevents zero/negative radius or inverted bounding boxes).</li>
      <li>Pre-configured presets (e.g., "Octant 1 Standard", "Steep Line m &gt; 1", "Center Circle", "Polygon Complex Clip").</li>
      <li>Polygon vertex editor with dynamic vertex addition and deletion.</li>
    </ul>
  </li>
  <li><strong>Center Column (Interactive HTML5 Canvas & Playback Bar):</strong>
    <ul>
      <li>Auto-scaling Cartesian grid with inverted Y-axis compensation.</li>
      <li>Color-coded raster pixels displaying plotted pixels, active candidate pixel, and 8-way symmetric counterparts.</li>
      <li>Overlay toggle for ideal continuous mathematical geometry (dashed cyan lines/circles).</li>
      <li>Viewport toolbar: Zoom In, Zoom Out, Reset Pan/Zoom, Fit to Bounds, and Coordinate Inspector.</li>
      <li>Full playback controller: Jump to Start, Step Backward, Play/Pause Toggle, Step Forward, Jump to End, Speed Selection (0.5x, 1x, 2x, 4x), and Scrub Range Slider.</li>
    </ul>
  </li>
  <li><strong>Right Column (Calculations Deck & Steps Table):</strong>
    <ul>
      <li><strong>Live Calculations Panel:</strong> Shows current step iteration $k$, natural-language explanation of why candidate $E$ or $SE$ was chosen, variable display matrix ($x$, $y$, $p_k$, $next\_p_k$, slope, outcodes), and real-time highlighted pseudocode line.</li>
      <li><strong>Steps Table:</strong> Scrollable, tabular log of all iterations with direct row-click step jumping, Copy to Clipboard, and CSV file export.</li>
    </ul>
  </li>
</ol>

<!-- Section 5 -->
<h1>5. Component Hierarchy & Source Code Architecture</h1>
<pre>
src/
├── algorithms/
│   ├── dda.ts                 # DDA line rasterizer (pure function + pseudocode)
│   ├── bresenham.ts           # Bresenham integer line rasterizer
│   ├── midpointLine.ts        # Midpoint line algorithm (implicit function)
│   ├── midpointCircle.ts      # Midpoint circle algorithm + 8-way symmetry
│   ├── cohenSutherland.ts     # 4-bit outcode line clipper
│   └── sutherlandHodgman.ts   # 4-boundary polygon clipper (4 edge cases)
├── components/
│   ├── Header.tsx             # Top navigation, algorithm selector, utility actions
│   ├── ControlPanel.tsx       # Coordinate inputs, presets, vertex manager
│   ├── GridCanvas.tsx         # HTML5 Canvas 2D raster engine + zoom/pan
│   ├── PlaybackBar.tsx        # Step scrubber, play/pause loop, speed selector
│   ├── CalculationsPanel.tsx  # Dynamic math matrix + highlighted pseudocode
│   ├── StepsTable.tsx         # Data table, row jump, CSV/Clipboard exporter
│   ├── SvgExportModal.tsx     # Vector graphic generator and downloader
│   └── SynopsisModal.tsx      # Academic synopsis, guidance, and team credits
├── types/
│   └── graphics.ts            # Strict TypeScript interfaces for points, steps, inputs
├── data/
│   └── presets.ts             # Standard curriculum test coordinates and shapes
├── App.tsx                    # Root state coordinator, playback timer, memoization
└── main.tsx                   # React 19 application entry point
</pre>

<!-- Section 6 -->
<h1>6. Presentation Script & Viva Voce Defense Q&A</h1>
<p>
  Use these questions and answers to rehearse for your presentation and viva voce examination tomorrow:
</p>

<div class="qa-card">
  <div class="qa-question">Q1: Why is the Midpoint Circle Algorithm preferred over direct trigonometric equations?</div>
  <div class="qa-answer">
    Direct trigonometric evaluation requires computing $x = r \cos \theta$ and $y = r \sin \theta$ for hundreds of angle steps. Trigonometric evaluations are floating-point operations requiring polynomial approximation in the ALU or FPU, causing severe performance bottlenecks. Similarly, $y = \sqrt{r^2 - x^2}$ requires square root operations and produces uneven pixel spacing (gaps where the slope is steep). The Midpoint Circle Algorithm operates entirely on incremental additions and bit-shifts ($2x = x \ll 1$), making it blazing fast in raster hardware.
  </div>
</div>

<div class="qa-card">
  <div class="qa-question">Q2: Why do we only calculate from x = 0 to x = y in the circle algorithm?</div>
  <div class="qa-answer">
    From $x = 0$ to $x = y$, the angle ranges from $90^\circ$ to $45^\circ$, where the slope $|dy/dx| \le 1$. In this octant, $x$ is the driving axis (increments by 1 every step), and $y$ changes at most by 1. Because circles possess 8-way symmetry, computing this single $45^\circ$ octant allows plotting all 8 octants simultaneously by transposing and negating coordinates: $(\pm x, \pm y)$ and $(\pm y, \pm x)$.
  </div>
</div>

<div class="qa-card">
  <div class="qa-question">Q3: What is the significance of the initial decision parameter p0 = 1 - r?</div>
  <div class="qa-answer">
    Evaluating the continuous circle function at the first midpoint $(1, r - 0.5)$ yields $F(1, r - 0.5) = 1 + (r - 0.5)^2 - r^2 = \frac{5}{4} - r$. In integer arithmetic, if $r$ is an integer, $\frac{5}{4} - r = 1.25 - r$. Since $r$ is an integer, $1.25 - r &lt; 0$ if and only if $1 - r &lt; 0$. Rounding $1.25$ to $1$ preserves the exact sign test for all integer radii, enabling integer-only calculation from step 0.
  </div>
</div>

<div class="qa-card">
  <div class="qa-question">Q4: What is the fundamental difference between Bresenham's Line and DDA?</div>
  <div class="qa-answer">
    DDA calculates exact floating-point increments ($\Delta x / \text{steps}$, $\Delta y / \text{steps}$) and performs a rounding function at every step to find the nearest pixel. Bresenham's algorithm uses a decision parameter derived by multiplying the error difference by $\Delta x$, converting all decisions into purely integer additions and subtractions without any floating-point arithmetic or rounding.
  </div>
</div>

<div class="qa-card">
  <div class="qa-question">Q5: How does Cohen-Sutherland achieve high speed when clipping large scenes?</div>
  <div class="qa-answer">
    Most line segments in typical scenes are either completely visible or completely invisible. Cohen-Sutherland uses 4-bit region outcodes: a single bitwise OR operation (<code>code1 | code2 == 0</code>) tests for trivial acceptance, and a single bitwise AND operation (<code>code1 &amp; code2 != 0</code>) tests for trivial rejection. Only ambiguous lines require expensive intersection division.
  </div>
</div>

<div class="qa-card">
  <div class="qa-question">Q6: What are the 4 fundamental edge cases of the Sutherland-Hodgman polygon clipping algorithm?</div>
  <div class="qa-answer">
    When traversing each polygon edge from start vertex $S$ to end vertex $P$ against an infinite boundary:
    1. <em>Inside to Inside:</em> Output $P$.
    2. <em>Inside to Outside:</em> Output intersection $I$.
    3. <em>Outside to Outside:</em> Output nothing.
    4. <em>Outside to Inside:</em> Output intersection $I$, then vertex $P$.
  </div>
</div>

<div class="qa-card">
  <div class="qa-question">Q7: What is the time and space complexity of the Midpoint Circle Algorithm?</div>
  <div class="qa-answer">
    The time complexity is $O(r)$ because $x$ increments from $0$ up to approximately $r / \sqrt{2} \approx 0.707r$ iterations. The space complexity is $O(1)$ auxiliary memory since only four scalar variables ($x, y, p_k, r$) are tracked.
  </div>
</div>

<!-- Section 7 -->
<h1>7. Academic References & Bibliography</h1>
<ol>
  <li>Hearn, Donald, M. Pauline Baker, and Warren R. Carithers. <em>Computer Graphics with OpenGL</em>. 4th ed., Pearson Education.</li>
  <li>Foley, James D., Andries van Dam, Steven K. Feiner, and John F. Hughes. <em>Computer Graphics: Principles and Practice</em>. Addison-Wesley.</li>
  <li>Rogers, David F. <em>Procedural Elements for Computer Graphics</em>. McGraw-Hill.</li>
  <li>Bresenham, Jack E. "Algorithm for computer control of a digital plotter." <em>IBM Systems Journal</em>, vol. 4, no. 1, 1965, pp. 25–30.</li>
  <li>Sutherland, Ivan E., and Gary W. Hodgman. "Reentrant Polygon Clipping." <em>Communications of the ACM</em>, vol. 17, no. 1, 1974, pp. 32–42.</li>
</ol>

<div style="margin-top: 30pt; padding-top: 10pt; border-top: 1pt solid #cbd5e1; text-align: center; font-size: 9pt; color: #94a3b8;">
  Report compiled for Master of Computer Application (MCA) Presentation & Defense · Chetan Business School, Hubballi
</div>

</body>
</html>`;

const outputPath = path.resolve('public', 'Graphics_Algorithm_Visualizer_Project_Report.doc');
fs.writeFileSync(outputPath, htmlContent, 'utf-8');
console.log('Successfully wrote Word document report to:', outputPath);
