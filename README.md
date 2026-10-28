# IMC Calculator

Calculadora de Índice de Masa Corporal (IMC) en JavaScript puro.

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

## Historial

Las versiones v1 y v2 del módulo quedaron registradas en `oldIMC.md` y `oldcall.md`. La v3 añade validación de tipos robusta y clasificación automática.

## Licencia

**Unlicense — dominio público total.** Copia, modifica, publica, usa, compila, vende o distribuye este software, en fuente o binario, para cualquier propósito, comercial o no, por cualquier medio. Sin atribución, sin condiciones, sin copyleft.

En jurisdicciones donde el dominio público no es viable, se otorga una licencia libre equivalente sin restricciones (ver `UNLICENSE`). Haz lo que quieras con el proyecto: es tu máquina.
