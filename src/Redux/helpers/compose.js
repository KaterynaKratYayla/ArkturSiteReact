// Делаем функцональную композицию из компонентов высшего пороядка
const compose = (...funcs) => (comp) => {
    return funcs.reduceRight(
        (wrapped, f) => f(wrapped),
        comp
    );
};

export default compose;
