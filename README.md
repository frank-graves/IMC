# IMC Calculator

Calculadora de Índice de Masa Corporal (IMC) en JavaScript puro. Sin dependencias, sin red, sin sorpresas.

## Filosofía

Este proyecto sigue principios estrictos:

- **100% FOSS** — cuando sea viable.
- **Local-first** — todo el cálculo ocurre en tu máquina. Nada sale a internet.
- **Privacy-by-design** — cero telemetría, cero recolección de datos, minimización total. No hay red ni persistencia, así que la superficie de ataque es mínima por construcción.
- **Optimización extrema y alta calidad** — código simple, validación explícita, sin buzzwords sin sustento técnico.
- **Cero dependencias innecesarias** — Node.js estándar o incluso un motor JS suelto es suficiente. No hay `package.json` con 400 paquetes para dividir una constante.

## Requisitos

- Node.js (cualquier versión moderna con CommonJS). Nada más.

## Uso

```bash
node calling.js
```

Salida esperada:

```
IMC Calculator v3
Tu IMCv3 es: 28.72
Clasificación: Sobrepeso
```

## API

El módulo `IMC.js` exporta dos funciones:

### `imc3(peso, altura)`

Calcula el IMC: `peso / altura²`.

- `peso` (number) — en kilogramos. Obligatorio.
- `altura` (number) — en metros. Obligatorio.
- Devuelve el IMC como número, o `undefined` con un error en consola si los argumentos faltan o no son numéricos.

```js
const { imc3 } = require("./IMC");
console.log(imc3(83, 1.70)); // 28.729...
```

### `cIMC(imc)`

Clasifica un valor de IMC según los rangos estándar de la OMS:

| IMC         | Clasificación              |
|-------------|----------------------------|
| < 18.5      | Bajo Peso                  |
| 18.5 – 24.9 | Peso normal o saludable    |
| 25 – 29.9   | Sobrepeso                  |
| ≥ 30        | Obeso                      |

```js
const { cIMC } = require("./IMC");
console.log(cIMC(28.73)); // "Sobrepeso"
```

## Estructura

```
.
├── IMC.js       # Módulo: cálculo y clasificación
├── calling.js   # Demostración de uso
├── oldIMC.md    # Versiones previas del módulo (historial)
└── oldcall.md   # Versiones previas de la demo (historial)
```

## Seguridad y privacidad

- **Sin dependencias externas**: nada que auditar, nada que secuestrar (`npm audit` no aplica porque no hay `node_modules`).
- **Sin E/S de red ni de disco**: no puede filtrar datos porque no los toca.
- **Validación de entradas**: tipos verificados explícitamente antes de calcular; NaN y valores ausentes se rechazan en lugar de propagarse.
- **Build reproducible**: no hay build. El código fuente *es* el artefacto ejecutable.

## Historial

Las versiones v1 y v2 del módulo quedaron registradas en `oldIMC.md` y `oldcall.md`. La v3 añade validación de tipos robusta y clasificación automática.

## Licencia

**Unlicense — dominio público total.** Copia, modifica, publica, usa, compila, vende o distribuye este software, en fuente o binario, para cualquier propósito, comercial o no, por cualquier medio. Sin atribución, sin condiciones, sin copyleft.

En jurisdicciones donde el dominio público no es viable, se otorga una licencia libre equivalente sin restricciones (ver `UNLICENSE`). Haz lo que quieras con el proyecto: es tu máquina.
