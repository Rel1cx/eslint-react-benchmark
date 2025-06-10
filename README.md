# react-linter-benchmark

## Run Benchmark

```sh
# lint with @eslint-react/eslint-plugin
TIMING=all pnpm eslint ./src/samples -c ./eslint.config.js
```

```sh
# lint with eslint-plugin-react
TIMING=all pnpm eslint ./src/samples -c ./eslint.config.alt.js
```

## Results

### System Information

```sh
OS: macOS Sequoia 15.5 arm64
Host: MacBook Air (13-inch, M3, 2024)
Kernel: Darwin 24.5.0
Shell: zsh 5.9
CPU: Apple M3 (8) @ 4.06 GHz
GPU: Apple M3 (10) @ 1.34 GHz [Integrated]
Memory: 8.13 GiB / 16.00 GiB (51%)
Swap: Disabled
Battery (bq40z651): 67% (3 hours, 39 mins remaining) [Discharging]
```

### `eslint-plugin-react`

```sh
react-linter-benchmark on  main via ⬢ v24.1.0 took 54s
```

| Rule                                          | Time (ms) |
| :-------------------------------------------- | --------: |
| `react/jsx-sort-props`                        |  1645.541 |
| `react/jsx-no-literals`                       |  1351.346 |
| `react/no-direct-mutation-state`              |  1049.529 |
| `react/destructuring-assignment`              |  1010.478 |
| `react/no-unstable-nested-components`         |   980.757 |
| `react/jsx-indent`                            |   963.572 |
| `react/boolean-prop-naming`                   |   768.378 |
| `react/no-unknown-property`                   |   617.911 |
| `react/prefer-stateless-function`             |   612.780 |
| `react/prefer-read-only-props`                |   588.244 |
| `react/prefer-exact-props`                    |   570.058 |
| `react/require-render-return`                 |   549.201 |
| `react/default-props-match-prop-types`        |   535.323 |
| `react/react-in-jsx-scope`                    |   512.731 |
| `react/static-property-placement`             |   496.167 |
| `react/display-name`                          |   486.888 |
| `react/require-optimization`                  |   476.911 |
| `react/no-typos`                              |   469.084 |
| `react/hook-use-state`                        |   465.937 |
| `react/function-component-definition`         |   464.602 |
| `react/jsx-no-constructed-context-values`     |   461.107 |
| `react/no-arrow-function-lifecycle`           |   460.056 |
| `react/no-set-state`                          |   431.335 |
| `react/sort-comp`                             |   429.536 |
| `react/no-this-in-sfc`                        |   424.754 |
| `react/no-object-type-as-default-prop`        |   415.972 |
| `react/require-default-props`                 |   415.029 |
| `react/prop-types`                            |   406.995 |
| `react/no-multi-comp`                         |   400.098 |
| `react/jsx-indent-props`                      |   350.291 |
| `react/no-unused-prop-types`                  |   349.870 |
| `react/no-array-index-key`                    |   329.006 |
| `react/no-access-state-in-setstate`           |   321.341 |
| `react/jsx-uses-react`                        |   247.526 |
| `react/jsx-fragments`                         |   235.130 |
| `react/no-deprecated`                         |   214.665 |
| `react/jsx-closing-bracket-location`          |   173.686 |
| `react/jsx-one-expression-per-line`           |   142.997 |
| `react/jsx-curly-brace-presence`              |   138.402 |
| `react/jsx-no-bind`                           |   125.528 |
| `react/no-did-mount-set-state`                |   121.180 |
| `react/jsx-newline`                           |   111.910 |
| `react/jsx-no-comment-textnodes`              |    96.019 |
| `react/no-did-update-set-state`               |    91.228 |
| `react/forbid-component-props`                |    84.020 |
| `react/forbid-prop-types`                     |    80.835 |
| `react/no-unsafe`                             |    80.182 |
| `react/jsx-max-depth`                         |    72.785 |
| `react/jsx-key`                               |    72.077 |
| `react/jsx-max-props-per-line`                |    71.782 |
| `react/no-unescaped-entities`                 |    70.118 |
| `react/jsx-props-no-multi-spaces`             |    61.529 |
| `react/no-string-refs`                        |    60.956 |
| `react/no-unused-state`                       |    58.809 |
| `react/jsx-filename-extension`                |    58.426 |
| `react/jsx-no-target-blank`                   |    58.310 |
| `react/jsx-tag-spacing`                       |    57.328 |
| `react/jsx-pascal-case`                       |    56.404 |
| `react/jsx-no-leaked-render`                  |    55.426 |
| `react/no-render-return-value`                |    53.068 |
| `react/jsx-wrap-multilines`                   |    50.388 |
| `react/jsx-no-duplicate-props`                |    50.183 |
| `react/jsx-no-script-url`                     |    43.746 |
| `react/jsx-curly-newline`                     |    42.711 |
| `react/jsx-no-undef`                          |    42.126 |
| `react/jsx-curly-spacing`                     |    39.357 |
| `react/no-namespace`                          |    37.339 |
| `react/no-unused-class-component-methods`     |    36.643 |
| `react/jsx-child-element-spacing`             |    36.457 |
| `react/jsx-equals-spacing`                    |    33.923 |
| `react/sort-prop-types`                       |    32.450 |
| `react/no-danger-with-children`               |    31.643 |
| `react/void-dom-elements-no-children`         |    29.495 |
| `react/no-adjacent-inline-elements`           |    28.792 |
| `react/jsx-handler-names`                     |    28.780 |
| `react/style-prop-object`                     |    28.271 |
| `react/checked-requires-onchange-or-readonly` |    27.199 |
| `react/button-has-type`                       |    26.864 |
| `react/no-invalid-html-attribute`             |    26.851 |
| `react/forbid-elements`                       |    26.416 |
| `react/forbid-foreign-prop-types`             |    23.946 |
| `react/no-danger`                             |    21.819 |
| `react/no-children-prop`                      |    20.920 |
| `react/self-closing-comp`                     |    20.793 |
| `react/jsx-props-no-spreading`                |    19.344 |
| `react/jsx-uses-vars`                         |    17.950 |
| `react/sort-default-props`                    |    17.214 |
| `react/no-find-dom-node`                      |    16.645 |
| `react/jsx-no-useless-fragment`               |    16.093 |
| `react/jsx-boolean-value`                     |    15.637 |
| `react/jsx-first-prop-new-line`               |    13.791 |
| `react/no-will-update-set-state`              |    13.688 |
| `react/jsx-closing-tag-location`              |    13.108 |
| `react/iframe-missing-sandbox`                |    12.488 |
| `react/prefer-es6-class`                      |    11.651 |
| `react/forbid-dom-props`                      |    11.277 |
| `react/no-is-mounted`                         |     9.417 |
| `react/jsx-props-no-spread-multi`             |     8.896 |
| `react/forward-ref-uses-ref`                  |     8.585 |
| `react/no-redundant-should-component-update`  |     7.318 |
| `react/state-in-constructor`                  |     2.878 |

### `@eslint-react/eslint-plugin`

```sh
react-linter-benchmark on  main via ⬢ v24.1.0 took 24s
```

| Rule                                                                 | Time (ms) |
| :------------------------------------------------------------------- | --------: |
| `@eslint-react/dom/no-unknown-property`                              |   268.475 |
| `@eslint-react/prefer-destructuring-assignment`                      |   155.435 |
| `@eslint-react/no-nested-component-definitions`                      |   146.133 |
| `@eslint-react/no-unstable-context-value`                            |   134.070 |
| `@eslint-react/no-missing-key`                                       |   110.619 |
| `@eslint-react/no-unstable-default-props`                            |   110.144 |
| `@eslint-react/naming-convention/component-name`                     |   107.855 |
| `@eslint-react/naming-convention/filename`                           |   106.557 |
| `@eslint-react/no-array-index-key`                                   |    97.415 |
| `@eslint-react/hooks-extra/no-direct-set-state-in-use-effect`        |    89.757 |
| `@eslint-react/no-nested-lazy-component-declarations`                |    89.062 |
| `@eslint-react/dom/no-script-url`                                    |    72.082 |
| `@eslint-react/no-clone-element`                                     |    69.923 |
| `@eslint-react/jsx-no-undef`                                         |    67.873 |
| `@eslint-react/naming-convention/use-state`                          |    65.085 |
| `@eslint-react/no-comment-textnodes`                                 |    51.652 |
| `@eslint-react/no-children-count`                                    |    48.874 |
| `@eslint-react/avoid-shorthand-boolean`                              |    42.200 |
| `@eslint-react/no-children-only`                                     |    42.043 |
| `@eslint-react/hooks-extra/no-direct-set-state-in-use-layout-effect` |    39.066 |
| `@eslint-react/no-create-ref`                                        |    37.897 |
| `@eslint-react/no-useless-forward-ref`                               |    36.060 |
| `@eslint-react/no-children-map`                                      |    35.893 |
| `@eslint-react/jsx-uses-vars`                                        |    34.675 |
| `@eslint-react/dom/no-namespace`                                     |    34.165 |
| `@eslint-react/hooks-extra/no-unnecessary-use-prefix`                |    34.151 |
| `@eslint-react/no-useless-fragment`                                  |    33.872 |
| `@eslint-react/no-children-for-each`                                 |    33.838 |
| `@eslint-react/jsx-key-before-spread`                                |    33.548 |
| `@eslint-react/naming-convention/filename-extension`                 |    33.224 |
| `@eslint-react/no-unused-state`                                      |    32.020 |
| `@eslint-react/no-unused-class-component-members`                    |    28.825 |
| `@eslint-react/hooks-extra/no-unnecessary-use-memo`                  |    27.678 |
| `@eslint-react/no-children-prop`                                     |    27.225 |
| `@eslint-react/web-api/no-leaked-event-listener`                     |    26.817 |
| `@eslint-react/dom/no-hydrate`                                       |    26.260 |
| `@eslint-react/no-implicit-key`                                      |    26.251 |
| `@eslint-react/dom/no-render-return-value`                           |    25.879 |
| `@eslint-react/dom/no-render`                                        |    25.691 |
| `@eslint-react/no-missing-component-display-name`                    |    25.449 |
| `@eslint-react/dom/no-void-elements-with-children`                   |    25.205 |
| `@eslint-react/hooks-extra/no-unnecessary-use-callback`              |    25.181 |
| `@eslint-react/no-children-to-array`                                 |    24.524 |
| `@eslint-react/avoid-shorthand-fragment`                             |    24.357 |
| `@eslint-react/web-api/no-leaked-timeout`                            |    24.236 |
| `@eslint-react/hooks-extra/prefer-use-state-lazy-initialization`     |    22.169 |
| `@eslint-react/no-string-refs`                                       |    21.642 |
| `@eslint-react/dom/no-unsafe-iframe-sandbox`                         |    20.898 |
| `@eslint-react/no-access-state-in-setstate`                          |    20.683 |
| `@eslint-react/prefer-react-namespace-import`                        |    20.202 |
| `@eslint-react/dom/no-missing-button-type`                           |    19.855 |
| `@eslint-react/no-use-context`                                       |    18.639 |
| `@eslint-react/web-api/no-leaked-interval`                           |    18.436 |
| `@eslint-react/no-forward-ref`                                       |    18.075 |
| `@eslint-react/no-prop-types`                                        |    16.976 |
| `@eslint-react/no-context-provider`                                  |    16.421 |
| `@eslint-react/naming-convention/context-name`                       |    15.711 |
| `@eslint-react/dom/no-missing-iframe-sandbox`                        |    15.601 |
| `@eslint-react/no-missing-context-display-name`                      |    15.547 |
| `@eslint-react/no-default-props`                                     |    15.372 |
| `@eslint-react/dom/no-unsafe-target-blank`                           |    15.219 |
| `@eslint-react/dom/no-use-form-state`                                |    14.901 |
| `@eslint-react/jsx-uses-react`                                       |    14.471 |
| `@eslint-react/no-redundant-should-component-update`                 |    14.312 |
| `@eslint-react/dom/no-dangerously-set-innerhtml`                     |    14.073 |
| `@eslint-react/dom/no-flush-sync`                                    |    13.856 |
| `@eslint-react/no-component-will-mount`                              |    13.836 |
| `@eslint-react/dom/no-find-dom-node`                                 |    13.070 |
| `@eslint-react/no-misused-capture-owner-stack`                       |    13.043 |
| `@eslint-react/no-unsafe-component-will-mount`                       |    12.650 |
| `@eslint-react/no-component-will-receive-props`                      |    12.367 |
| `@eslint-react/no-set-state-in-component-did-update`                 |    12.332 |
| `@eslint-react/no-set-state-in-component-did-mount`                  |    12.296 |
| `@eslint-react/no-class-component`                                   |    12.148 |
| `@eslint-react/no-duplicate-key`                                     |    11.733 |
| `@eslint-react/no-component-will-update`                             |    11.732 |
| `@eslint-react/dom/no-dangerously-set-innerhtml-with-children`       |    11.172 |
| `@eslint-react/no-set-state-in-component-will-update`                |    11.091 |
| `@eslint-react/jsx-no-duplicate-props`                               |    11.026 |
| `@eslint-react/web-api/no-leaked-resize-observer`                    |    10.354 |
| `@eslint-react/no-direct-mutation-state`                             |     7.334 |
| `@eslint-react/no-unsafe-component-will-receive-props`               |     7.265 |
| `@eslint-react/no-unsafe-component-will-update`                      |     7.228 |
| `@eslint-react/jsx-no-iife`                                          |     7.211 |
| `@eslint-react/no-complex-conditional-rendering`                     |     6.620 |

## Highlighted Rule Timings Differences

| Rule                                                 | Time (ms) | Times Faster |
| :--------------------------------------------------- | --------: | -----------: |
| `react/destructuring-assignment`                     |  1010.478 |              |
| `@eslint-react/prefer-destructuring-assignment`      |   155.435 |         6.5x |
| ---                                                  |           |              |
| `react/no-direct-mutation-state`                     |  1049.529 |              |
| `@eslint-react/no-direct-mutation-state`             |     7.334 |       142.9x |
| ---                                                  |           |              |
| `react/no-unstable-nested-components`                |   980.757 |              |
| `@eslint-react/no-nested-component-definitions`      |   146.133 |         6.7x |
| ---                                                  |           |              |
| `react/display-name`                                 |   486.888 |              |
| `@eslint-react/no-missing-component-display-name`    |    25.449 |        19.1x |
| `@eslint-react/no-missing-context-display-name`      |    15.547 |         7.4x |
| ---                                                  |           |              |
| `react/hook-use-state`                               |   465.937 |              |
| `@eslint-react/naming-convention/use-state`          |    65.085 |         7.1x |
| ---                                                  |           |              |
| `react/jsx-no-constructed-context-values`            |   461.107 |              |
| `@eslint-react/no-unstable-context-value`            |   134.070 |         3.4x |
| ---                                                  |           |              |
| `react/no-object-type-as-default-prop`               |   415.972 |              |
| `@eslint-react/no-unstable-default-props`            |   110.144 |         3.7x |
| ---                                                  |           |              |
| `react/no-array-index-key`                           |   329.006 |              |
| `@eslint-react/no-array-index-key`                   |    97.415 |         3.3x |
| ---                                                  |           |              |
| `react/no-access-state-in-setstate`                  |   321.341 |              |
| `@eslint-react/no-access-state-in-setstate`          |    20.683 |        15.5x |
| ---                                                  |           |              |
| `react/jsx-uses-react`                               |   247.526 |              |
| `@eslint-react/jsx-uses-react`                       |    14.471 |        17.1x |
| ---                                                  |           |              |
| `react/no-did-mount-set-state`                       |   121.180 |              |
| `@eslint-react/no-set-state-in-component-did-mount`  |    12.296 |         9.8x |
| ---                                                  |           |              |
| `react/no-did-update-set-state`                      |    91.228 |              |
| `@eslint-react/no-set-state-in-component-did-update` |    12.332 |         7.3x |
| ---                                                  |           |              |
| `react/no-string-refs`                               |    60.956 |              |
| `@eslint-react/no-string-refs`                       |    21.642 |         2.8x |
