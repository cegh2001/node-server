¿Qué sucedió al usar async y await?

Al usar async y await, el programa espera a que las promesas se resuelvan antes de continuar con la siguiente instrucción.

¿Qué sucedió al usar el método then()?

Al usar el método también se manejan las promesas, pero el código se estructura de manera diferente. Cada .then() se encadena a la promesa anterior, lo que puede resultar en un código más anidado y menos legible en comparación con async/await.

¿Qué diferencias encontraste entre async, await y el método then()?

La principal diferencia es la estructura del código, async/await permite escribir código de manera más secuencial, similar a la programación síncrona, lo que mejora la legibilidad.
El método .then() implica encadenar promesas con múltiples .then(), lo que puede ser menos legible.
async/await maneja automáticamente los errores con try/catch, mientras que con .then(), debes usar .catch() para manejar errores.