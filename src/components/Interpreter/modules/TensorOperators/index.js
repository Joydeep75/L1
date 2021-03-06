import * as tf from "@tensorflow/tfjs"

const binarize = (fn) => (({ a, b }) => fn(a, b))

export default {
    "+": ({a, b}) => {
        if (a === undefined) {
            return tf.sum(b)
        }
        return tf.add(a, b)
    },
    "-": ({a, b}) => {
        if (a === undefined) {
            return tf.neg(b)
        }
        return tf.sub(a, b)
    },
    "*": ({a, b}) => {
        if (a === undefined) {
            if (!tf.prod) {
                return new Error("TensorFlow.js does not support tf.prod().")
            }
            return tf.prod(b)
        }
        return tf.mul(a, b)
    },
    "×": ({a, b}) => {
        if (a === undefined) {
            if (!tf.prod) {
                return new Error("TensorFlow.js does not support tf.prod().")
            }
            return tf.prod(b)
        }
        return tf.mul(a, b)
    },
    "/": ({a, b}) => {
        if (a === undefined) {
            return tf.reciprocal(b)
        }
        return tf.div(a, b)
    },
    "÷": ({a, b}) => {
        if (a === undefined) {
            return tf.reciprocal(b)
        }
        return tf.div(a, b)
    },
    "^": binarize(tf.pow),
    "%": binarize(tf.mod),
    "@": binarize(tf.matMul),
    "⊗": binarize(tf.matMul),
}