# react-linter-benchmark

## Run Benchmark

### Lint with no plugins (dry run)

```sh
TIMING=all pnpm eslint ./src/samples -c ./eslint.config.dry.js
```

### Lint with `eslint-plugin-react`

```sh
TIMING=all pnpm eslint ./src/samples -c ./eslint.config.alt.js
```

### Lint with `@eslint-react/eslint-plugin`

```sh
TIMING=all pnpm eslint ./src/samples -c ./eslint.config.js
```

## System Information

```sh
OS: macOS Sequoia 15.5 arm64
Host: Mac mini (M2, 2023, Four Thunderbolt 4 ports)
Kernel: Darwin 24.5.0
Shell: zsh 5.9
CPU: Apple M2 Pro (10) @ 3.50 GHz
GPU: Apple M2 Pro (16) @ 1.40 GHz [Integrated]
Memory: 9.58 GiB / 16.00 GiB (60%)
Swap: Disabled
```

## Dry Run

### Command

```sh
TIMING=all pnpm eslint ./src/samples -c ./eslint.config.dry.js
```

### Output

```sh
Rule | Time (ms) | Relative
:----|----------:|--------:

react-linter-benchmark on  main [$!+] via ⬢ v24.1.0 took 17s
```

## `eslint-plugin-react`

### Command

```sh
TIMING=all pnpm eslint ./src/samples -c ./eslint.config.alt.js
```

### Output

```sh
Rule                                        | Time (ms) | Relative
:-------------------------------------------|----------:|--------:
react/jsx-sort-props                        |  1850.050 |     7.2%
react/jsx-no-literals                       |  1343.110 |     5.2%
react/destructuring-assignment              |  1199.974 |     4.7%
react/no-direct-mutation-state              |  1119.053 |     4.4%
react/no-unstable-nested-components         |  1093.061 |     4.3%
react/jsx-indent                            |  1053.231 |     4.1%
react/boolean-prop-naming                   |   833.866 |     3.2%
react/no-unknown-property                   |   682.255 |     2.7%
react/prefer-stateless-function             |   658.251 |     2.6%
react/no-object-type-as-default-prop        |   651.003 |     2.5%
react/display-name                          |   635.778 |     2.5%
react/function-component-definition         |   611.965 |     2.4%
react/require-optimization                  |   546.657 |     2.1%
react/prefer-read-only-props                |   518.724 |     2.0%
react/jsx-no-constructed-context-values     |   516.411 |     2.0%
react/hook-use-state                        |   515.680 |     2.0%
react/require-default-props                 |   513.383 |     2.0%
react/prefer-exact-props                    |   512.050 |     2.0%
react/static-property-placement             |   503.368 |     2.0%
react/default-props-match-prop-types        |   499.357 |     1.9%
react/jsx-indent-props                      |   492.286 |     1.9%
react/no-multi-comp                         |   488.132 |     1.9%
react/require-render-return                 |   487.627 |     1.9%
react/prop-types                            |   484.742 |     1.9%
react/sort-comp                             |   478.174 |     1.9%
react/no-typos                              |   475.283 |     1.9%
react/no-unused-prop-types                  |   460.284 |     1.8%
react/react-in-jsx-scope                    |   455.801 |     1.8%
react/no-this-in-sfc                        |   433.307 |     1.7%
react/no-arrow-function-lifecycle           |   416.040 |     1.6%
react/no-set-state                          |   395.818 |     1.5%
react/no-array-index-key                    |   385.873 |     1.5%
react/no-access-state-in-setstate           |   299.919 |     1.2%
react/jsx-uses-react                        |   281.264 |     1.1%
react/jsx-fragments                         |   260.484 |     1.0%
react/no-deprecated                         |   231.205 |     0.9%
react/jsx-closing-bracket-location          |   177.984 |     0.7%
react/jsx-one-expression-per-line           |   155.460 |     0.6%
react/jsx-curly-brace-presence              |   120.987 |     0.5%
react/jsx-max-depth                         |   120.273 |     0.5%
react/no-did-mount-set-state                |   119.750 |     0.5%
react/jsx-max-props-per-line                |   117.033 |     0.5%
react/jsx-no-bind                           |   115.158 |     0.4%
react/jsx-newline                           |   104.062 |     0.4%
react/no-did-update-set-state               |   101.879 |     0.4%
react/no-unescaped-entities                 |   100.103 |     0.4%
react/no-unsafe                             |    99.739 |     0.4%
react/jsx-no-comment-textnodes              |    83.630 |     0.3%
react/jsx-key                               |    82.035 |     0.3%
react/jsx-tag-spacing                       |    81.563 |     0.3%
react/forbid-prop-types                     |    76.039 |     0.3%
react/forbid-component-props                |    73.674 |     0.3%
react/no-string-refs                        |    71.989 |     0.3%
react/no-render-return-value                |    69.649 |     0.3%
react/jsx-pascal-case                       |    67.190 |     0.3%
react/jsx-no-target-blank                   |    64.853 |     0.3%
react/jsx-curly-spacing                     |    59.165 |     0.2%
react/jsx-props-no-multi-spaces             |    57.990 |     0.2%
react/jsx-no-duplicate-props                |    57.135 |     0.2%
react/jsx-wrap-multilines                   |    53.274 |     0.2%
react/jsx-no-leaked-render                  |    52.516 |     0.2%
react/no-danger-with-children               |    49.374 |     0.2%
react/jsx-filename-extension                |    46.126 |     0.2%
react/no-unused-state                       |    45.498 |     0.2%
react/jsx-no-script-url                     |    44.608 |     0.2%
react/sort-prop-types                       |    41.497 |     0.2%
react/no-unused-class-component-methods     |    39.241 |     0.2%
react/void-dom-elements-no-children         |    38.783 |     0.2%
react/jsx-no-undef                          |    38.047 |     0.1%
react/no-invalid-html-attribute             |    38.007 |     0.1%
react/jsx-equals-spacing                    |    34.926 |     0.1%
react/jsx-curly-newline                     |    34.497 |     0.1%
react/no-adjacent-inline-elements           |    34.049 |     0.1%
react/no-children-prop                      |    34.026 |     0.1%
react/jsx-handler-names                     |    32.710 |     0.1%
react/style-prop-object                     |    31.274 |     0.1%
react/button-has-type                       |    30.662 |     0.1%
react/forbid-elements                       |    29.059 |     0.1%
react/jsx-child-element-spacing             |    27.325 |     0.1%
react/sort-default-props                    |    26.304 |     0.1%
react/checked-requires-onchange-or-readonly |    23.413 |     0.1%
react/no-namespace                          |    22.600 |     0.1%
react/self-closing-comp                     |    22.340 |     0.1%
react/jsx-props-no-spreading                |    21.532 |     0.1%
react/jsx-uses-vars                         |    19.112 |     0.1%
react/forbid-foreign-prop-types             |    18.085 |     0.1%
react/jsx-no-useless-fragment               |    18.040 |     0.1%
react/jsx-boolean-value                     |    17.119 |     0.1%
react/no-danger                             |    15.324 |     0.1%
react/no-find-dom-node                      |    15.178 |     0.1%
react/jsx-closing-tag-location              |    15.063 |     0.1%
react/iframe-missing-sandbox                |    12.903 |     0.1%
react/forbid-dom-props                      |    12.553 |     0.0%
react/prefer-es6-class                      |    12.473 |     0.0%
react/jsx-first-prop-new-line               |    10.406 |     0.0%
react/no-is-mounted                         |     9.811 |     0.0%
react/no-will-update-set-state              |     9.737 |     0.0%
react/jsx-props-no-spread-multi             |     9.422 |     0.0%
react/forward-ref-uses-ref                  |     9.193 |     0.0%
react/state-in-constructor                  |     2.751 |     0.0%
react/no-redundant-should-component-update  |     2.542 |     0.0%

react-linter-benchmark on  main [$+] via ⬢ v24.1.0 took 1m0s
```

## `@eslint-react/eslint-plugin`

### Command

```sh
TIMING=all pnpm eslint ./src/samples -c ./eslint.config.js
```

### Output

```sh
Rule                                                               | Time (ms) | Relative
:------------------------------------------------------------------|----------:|--------:
@eslint-react/dom/no-unknown-property                              |   332.108 |     9.6%
@eslint-react/prefer-destructuring-assignment                      |   200.009 |     5.8%
@eslint-react/no-nested-component-definitions                      |   155.983 |     4.5%
@eslint-react/naming-convention/component-name                     |   142.885 |     4.1%
@eslint-react/no-unstable-context-value                            |   132.454 |     3.8%
@eslint-react/no-nested-lazy-component-declarations                |   131.986 |     3.8%
@eslint-react/no-unstable-default-props                            |   108.671 |     3.1%
@eslint-react/naming-convention/filename                           |   103.542 |     3.0%
@eslint-react/no-missing-key                                       |    98.176 |     2.8%
@eslint-react/hooks-extra/no-direct-set-state-in-use-effect        |    87.360 |     2.5%
@eslint-react/dom/no-script-url                                    |    70.130 |     2.0%
@eslint-react/naming-convention/use-state                          |    69.097 |     2.0%
@eslint-react/no-array-index-key                                   |    68.242 |     2.0%
@eslint-react/hooks-extra/no-unnecessary-use-prefix                |    67.434 |     1.9%
@eslint-react/jsx-no-undef                                         |    64.266 |     1.9%
@eslint-react/hooks-extra/no-direct-set-state-in-use-layout-effect |    62.137 |     1.8%
@eslint-react/no-comment-textnodes                                 |    51.924 |     1.5%
@eslint-react/no-children-count                                    |    47.983 |     1.4%
@eslint-react/web-api/no-leaked-timeout                            |    44.256 |     1.3%
@eslint-react/no-children-to-array                                 |    44.010 |     1.3%
@eslint-react/avoid-shorthand-boolean                              |    42.666 |     1.2%
@eslint-react/no-useless-forward-ref                               |    40.001 |     1.2%
@eslint-react/naming-convention/filename-extension                 |    38.247 |     1.1%
@eslint-react/no-children-prop                                     |    38.034 |     1.1%
@eslint-react/no-useless-fragment                                  |    37.854 |     1.1%
@eslint-react/no-children-for-each                                 |    37.794 |     1.1%
@eslint-react/dom/no-render                                        |    36.189 |     1.0%
@eslint-react/no-children-map                                      |    35.926 |     1.0%
@eslint-react/hooks-extra/no-unnecessary-use-callback              |    34.436 |     1.0%
@eslint-react/no-use-context                                       |    34.310 |     1.0%
@eslint-react/no-children-only                                     |    33.843 |     1.0%
@eslint-react/no-create-ref                                        |    32.591 |     0.9%
@eslint-react/hooks-extra/prefer-use-state-lazy-initialization     |    31.015 |     0.9%
@eslint-react/dom/no-render-return-value                           |    28.307 |     0.8%
@eslint-react/no-missing-component-display-name                    |    28.064 |     0.8%
@eslint-react/avoid-shorthand-fragment                             |    27.900 |     0.8%
@eslint-react/no-misused-capture-owner-stack                       |    27.042 |     0.8%
@eslint-react/hooks-extra/no-unnecessary-use-memo                  |    26.277 |     0.8%
@eslint-react/no-clone-element                                     |    26.101 |     0.8%
@eslint-react/no-unused-state                                      |    25.710 |     0.7%
@eslint-react/no-context-provider                                  |    24.423 |     0.7%
@eslint-react/no-unused-class-component-members                    |    24.393 |     0.7%
@eslint-react/prefer-react-namespace-import                        |    23.038 |     0.7%
@eslint-react/no-access-state-in-setstate                          |    22.695 |     0.7%
@eslint-react/dom/no-missing-button-type                           |    22.229 |     0.6%
@eslint-react/web-api/no-leaked-event-listener                     |    22.058 |     0.6%
@eslint-react/web-api/no-leaked-interval                           |    21.531 |     0.6%
@eslint-react/dom/no-void-elements-with-children                   |    20.218 |     0.6%
@eslint-react/dom/no-dangerously-set-innerhtml-with-children       |    20.022 |     0.6%
@eslint-react/no-implicit-key                                      |    19.972 |     0.6%
@eslint-react/jsx-no-duplicate-props                               |    19.914 |     0.6%
@eslint-react/no-forward-ref                                       |    19.662 |     0.6%
@eslint-react/jsx-uses-vars                                        |    19.635 |     0.6%
@eslint-react/no-set-state-in-component-did-mount                  |    19.184 |     0.6%
@eslint-react/no-prop-types                                        |    18.355 |     0.5%
@eslint-react/dom/no-unsafe-target-blank                           |    18.297 |     0.5%
@eslint-react/no-component-will-receive-props                      |    18.273 |     0.5%
@eslint-react/no-missing-context-display-name                      |    18.119 |     0.5%
@eslint-react/naming-convention/context-name                       |    18.060 |     0.5%
@eslint-react/dom/no-hydrate                                       |    17.598 |     0.5%
@eslint-react/dom/no-missing-iframe-sandbox                        |    17.153 |     0.5%
@eslint-react/no-default-props                                     |    16.568 |     0.5%
@eslint-react/dom/no-unsafe-iframe-sandbox                         |    16.476 |     0.5%
@eslint-react/dom/no-use-form-state                                |    16.049 |     0.5%
@eslint-react/no-redundant-should-component-update                 |    15.283 |     0.4%
@eslint-react/no-component-will-mount                              |    15.078 |     0.4%
@eslint-react/dom/no-flush-sync                                    |    14.640 |     0.4%
@eslint-react/dom/no-dangerously-set-innerhtml                     |    14.460 |     0.4%
@eslint-react/dom/no-find-dom-node                                 |    14.442 |     0.4%
@eslint-react/jsx-key-before-spread                                |    14.194 |     0.4%
@eslint-react/no-class-component                                   |    13.615 |     0.4%
@eslint-react/no-duplicate-key                                     |    13.255 |     0.4%
@eslint-react/no-set-state-in-component-did-update                 |    12.871 |     0.4%
@eslint-react/no-component-will-update                             |    12.654 |     0.4%
@eslint-react/no-set-state-in-component-will-update                |    12.191 |     0.4%
@eslint-react/no-string-refs                                       |    12.096 |     0.3%
@eslint-react/dom/no-namespace                                     |    11.367 |     0.3%
@eslint-react/web-api/no-leaked-resize-observer                    |    10.943 |     0.3%
@eslint-react/jsx-uses-react                                       |     9.350 |     0.3%
@eslint-react/no-unsafe-component-will-mount                       |     8.342 |     0.2%
@eslint-react/no-direct-mutation-state                             |     7.918 |     0.2%
@eslint-react/jsx-no-iife                                          |     7.910 |     0.2%
@eslint-react/no-unsafe-component-will-receive-props               |     7.860 |     0.2%
@eslint-react/no-unsafe-component-will-update                      |     7.790 |     0.2%
@eslint-react/no-complex-conditional-rendering                     |     7.045 |     0.2%

react-linter-benchmark on  main [$+] via ⬢ v24.1.0 took 27s
```

## Significant Differences

The following rules show significant differences in execution time between `eslint-plugin-react` and `@eslint-react/eslint-plugin`:

| Rule                                                 | Time (ms) | Times Faster |
| :--------------------------------------------------- | --------: | -----------: |
| `react/destructuring-assignment`                     |  1199.974 |              |
| `@eslint-react/prefer-destructuring-assignment`      |   200.009 |         5.9x |
| `react/no-direct-mutation-state`                     |  1119.053 |              |
| `@eslint-react/no-direct-mutation-state`             |     7.918 |       141.3x |
| `react/no-unstable-nested-components`                |  1093.061 |              |
| `@eslint-react/no-nested-component-definitions`      |   155.983 |         7.0x |
| `react/display-name`                                 |   635.778 |              |
| `@eslint-react/no-missing-component-display-name`    |    28.064 |        22.6x |
| `react/hook-use-state`                               |   515.680 |              |
| `@eslint-react/naming-convention/use-state`          |    69.097 |         7.4x |
| `react/jsx-no-constructed-context-values`            |   516.411 |              |
| `@eslint-react/no-unstable-context-value`            |   132.454 |         3.8x |
| `react/no-object-type-as-default-prop`               |   651.003 |              |
| `@eslint-react/no-unstable-default-props`            |   108.671 |         5.9x |
| `react/no-array-index-key`                           |   385.873 |              |
| `@eslint-react/no-array-index-key`                   |    68.242 |         5.6x |
| `react/no-access-state-in-setstate`                  |   299.919 |              |
| `@eslint-react/no-access-state-in-setstate`          |    22.695 |        13.2x |
| `react/jsx-uses-react`                               |   281.264 |              |
| `@eslint-react/jsx-uses-react`                       |     9.350 |        30.0x |
| `react/no-did-mount-set-state`                       |   119.750 |              |
| `@eslint-react/no-set-state-in-component-did-mount`  |    19.184 |         6.2x |
| `react/no-did-update-set-state`                      |   101.879 |              |
| `@eslint-react/no-set-state-in-component-did-update` |    12.871 |         7.9x |
| `react/no-string-refs`                               |    71.989 |              |
| `@eslint-react/no-string-refs`                       |    12.096 |         5.9x |

## Summary

- The dry run took **17s**.
- Linting with `eslint-plugin-react` took **1m0s**, which is **43s** longer than the dry run.
- Linting with `@eslint-react/eslint-plugin` took **27s**, which is **10s** longer than the dry run.
- The `@eslint-react/eslint-plugin` is average **4.3x** faster than `eslint-plugin-react` across the linting process.
