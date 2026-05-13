# Algoritma

## Flowchart

```Mermaid

flowchart TD
start@{shape: circle, label:"start" }
a@{shape: rect, label: "i=1" }
b@{shape: diamond, label: "i<= 4" }
c@{shape: rect, label: "i++" }
d@{shape: rect, label: 'baris=""' }
e@{shape: rect, label: "j=1" }
f@{shape: diamond, label: "j<=i" }
g@{shape: rect, label: "j++" }
h@{shape: rect, label: 'baris+="*"' }
i@{shape: lean-r, label: '"{baris}"'}
stop@{shape: dbl-circ, label: "stop" }

start --> a
a --> b
b -- yes --> d
d --> e
e --> f
f -- yes --> h
h --> g
i--> c
g --> f
f -- no --> i
c --> b
b -- no --> stop


```
