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
Rule                                        | Time (ms) | Relative
:-------------------------------------------|----------:|--------:
react/jsx-sort-props                        |  1645.541 |     6.9%
react/jsx-no-literals                       |  1351.346 |     5.6%
react/no-direct-mutation-state              |  1049.529 |     4.4%
react/destructuring-assignment              |  1010.478 |     4.2%
react/no-unstable-nested-components         |   980.757 |     4.1%
react/jsx-indent                            |   963.572 |     4.0%
react/boolean-prop-naming                   |   768.378 |     3.2%
react/no-unknown-property                   |   617.911 |     2.6%
react/prefer-stateless-function             |   612.780 |     2.6%
react/prefer-read-only-props                |   588.244 |     2.5%
react/prefer-exact-props                    |   570.058 |     2.4%
react/require-render-return                 |   549.201 |     2.3%
react/default-props-match-prop-types        |   535.323 |     2.2%
react/react-in-jsx-scope                    |   512.731 |     2.1%
react/static-property-placement             |   496.167 |     2.1%
react/display-name                          |   486.888 |     2.0%
react/require-optimization                  |   476.911 |     2.0%
react/no-typos                              |   469.084 |     2.0%
react/hook-use-state                        |   465.937 |     1.9%
react/function-component-definition         |   464.602 |     1.9%
react/jsx-no-constructed-context-values     |   461.107 |     1.9%
react/no-arrow-function-lifecycle           |   460.056 |     1.9%
react/no-set-state                          |   431.335 |     1.8%
react/sort-comp                             |   429.536 |     1.8%
react/no-this-in-sfc                        |   424.754 |     1.8%
react/no-object-type-as-default-prop        |   415.972 |     1.7%
react/require-default-props                 |   415.029 |     1.7%
react/prop-types                            |   406.995 |     1.7%
react/no-multi-comp                         |   400.098 |     1.7%
react/jsx-indent-props                      |   350.291 |     1.5%
react/no-unused-prop-types                  |   349.870 |     1.5%
react/no-array-index-key                    |   329.006 |     1.4%
react/no-access-state-in-setstate           |   321.341 |     1.3%
react/jsx-uses-react                        |   247.526 |     1.0%
react/jsx-fragments                         |   235.130 |     1.0%
react/no-deprecated                         |   214.665 |     0.9%
react/jsx-closing-bracket-location          |   173.686 |     0.7%
react/jsx-one-expression-per-line           |   142.997 |     0.6%
react/jsx-curly-brace-presence              |   138.402 |     0.6%
react/jsx-no-bind                           |   125.528 |     0.5%
react/no-did-mount-set-state                |   121.180 |     0.5%
react/jsx-newline                           |   111.910 |     0.5%
react/jsx-no-comment-textnodes              |    96.019 |     0.4%
react/no-did-update-set-state               |    91.228 |     0.4%
react/forbid-component-props                |    84.020 |     0.4%
react/forbid-prop-types                     |    80.835 |     0.3%
react/no-unsafe                             |    80.182 |     0.3%
react/jsx-max-depth                         |    72.785 |     0.3%
react/jsx-key                               |    72.077 |     0.3%
react/jsx-max-props-per-line                |    71.782 |     0.3%
react/no-unescaped-entities                 |    70.118 |     0.3%
react/jsx-props-no-multi-spaces             |    61.529 |     0.3%
react/no-string-refs                        |    60.956 |     0.3%
react/no-unused-state                       |    58.809 |     0.2%
react/jsx-filename-extension                |    58.426 |     0.2%
react/jsx-no-target-blank                   |    58.310 |     0.2%
react/jsx-tag-spacing                       |    57.328 |     0.2%
react/jsx-pascal-case                       |    56.404 |     0.2%
react/jsx-no-leaked-render                  |    55.426 |     0.2%
react/no-render-return-value                |    53.068 |     0.2%
react/jsx-wrap-multilines                   |    50.388 |     0.2%
react/jsx-no-duplicate-props                |    50.183 |     0.2%
react/jsx-no-script-url                     |    43.746 |     0.2%
react/jsx-curly-newline                     |    42.711 |     0.2%
react/jsx-no-undef                          |    42.126 |     0.2%
react/jsx-curly-spacing                     |    39.357 |     0.2%
react/no-namespace                          |    37.339 |     0.2%
react/no-unused-class-component-methods     |    36.643 |     0.2%
react/jsx-child-element-spacing             |    36.457 |     0.2%
react/jsx-equals-spacing                    |    33.923 |     0.1%
react/sort-prop-types                       |    32.450 |     0.1%
react/no-danger-with-children               |    31.643 |     0.1%
react/void-dom-elements-no-children         |    29.495 |     0.1%
react/no-adjacent-inline-elements           |    28.792 |     0.1%
react/jsx-handler-names                     |    28.780 |     0.1%
react/style-prop-object                     |    28.271 |     0.1%
react/checked-requires-onchange-or-readonly |    27.199 |     0.1%
react/button-has-type                       |    26.864 |     0.1%
react/no-invalid-html-attribute             |    26.851 |     0.1%
react/forbid-elements                       |    26.416 |     0.1%
react/forbid-foreign-prop-types             |    23.946 |     0.1%
react/no-danger                             |    21.819 |     0.1%
react/no-children-prop                      |    20.920 |     0.1%
react/self-closing-comp                     |    20.793 |     0.1%
react/jsx-props-no-spreading                |    19.344 |     0.1%
react/jsx-uses-vars                         |    17.950 |     0.1%
react/sort-default-props                    |    17.214 |     0.1%
react/no-find-dom-node                      |    16.645 |     0.1%
react/jsx-no-useless-fragment               |    16.093 |     0.1%
react/jsx-boolean-value                     |    15.637 |     0.1%
react/jsx-first-prop-new-line               |    13.791 |     0.1%
react/no-will-update-set-state              |    13.688 |     0.1%
react/jsx-closing-tag-location              |    13.108 |     0.1%
react/iframe-missing-sandbox                |    12.488 |     0.1%
react/prefer-es6-class                      |    11.651 |     0.0%
react/forbid-dom-props                      |    11.277 |     0.0%
react/no-is-mounted                         |     9.417 |     0.0%
react/jsx-props-no-spread-multi             |     8.896 |     0.0%
react/forward-ref-uses-ref                  |     8.585 |     0.0%
react/no-redundant-should-component-update  |     7.318 |     0.0%
react/state-in-constructor                  |     2.878 |     0.0%

react-linter-benchmark on  main via ⬢ v24.1.0 took 54s
```

### `@eslint-react/eslint-plugin`

```sh
Rule                                                               | Time (ms) | Relative
:------------------------------------------------------------------|----------:|--------:
@eslint-react/dom/no-unknown-property                              |   268.475 |     7.5%
@eslint-react/prefer-destructuring-assignment                      |   155.435 |     4.3%
@eslint-react/no-nested-component-definitions                      |   146.133 |     4.1%
@eslint-react/no-unstable-context-value                            |   134.070 |     3.7%
@eslint-react/no-missing-key                                       |   110.619 |     3.1%
@eslint-react/no-unstable-default-props                            |   110.144 |     3.1%
@eslint-react/naming-convention/component-name                     |   107.855 |     3.0%
@eslint-react/naming-convention/filename                           |   106.557 |     3.0%
@eslint-react/no-array-index-key                                   |    97.415 |     2.7%
@eslint-react/hooks-extra/no-direct-set-state-in-use-effect        |    89.757 |     2.5%
@eslint-react/no-nested-lazy-component-declarations                |    89.062 |     2.5%
@eslint-react/dom/no-script-url                                    |    72.082 |     2.0%
@eslint-react/no-clone-element                                     |    69.923 |     1.9%
@eslint-react/jsx-no-undef                                         |    67.873 |     1.9%
@eslint-react/naming-convention/use-state                          |    65.085 |     1.8%
@eslint-react/no-comment-textnodes                                 |    51.652 |     1.4%
@eslint-react/no-children-count                                    |    48.874 |     1.4%
@eslint-react/avoid-shorthand-boolean                              |    42.200 |     1.2%
@eslint-react/no-children-only                                     |    42.043 |     1.2%
@eslint-react/hooks-extra/no-direct-set-state-in-use-layout-effect |    39.066 |     1.1%
@eslint-react/no-create-ref                                        |    37.897 |     1.1%
@eslint-react/no-useless-forward-ref                               |    36.060 |     1.0%
@eslint-react/no-children-map                                      |    35.893 |     1.0%
@eslint-react/jsx-uses-vars                                        |    34.675 |     1.0%
@eslint-react/dom/no-namespace                                     |    34.165 |     1.0%
@eslint-react/hooks-extra/no-unnecessary-use-prefix                |    34.151 |     1.0%
@eslint-react/no-useless-fragment                                  |    33.872 |     0.9%
@eslint-react/no-children-for-each                                 |    33.838 |     0.9%
@eslint-react/jsx-key-before-spread                                |    33.548 |     0.9%
@eslint-react/naming-convention/filename-extension                 |    33.224 |     0.9%
@eslint-react/no-unused-state                                      |    32.020 |     0.9%
@eslint-react/no-unused-class-component-members                    |    28.825 |     0.8%
@eslint-react/hooks-extra/no-unnecessary-use-memo                  |    27.678 |     0.8%
@eslint-react/no-children-prop                                     |    27.225 |     0.8%
@eslint-react/web-api/no-leaked-event-listener                     |    26.817 |     0.7%
@eslint-react/dom/no-hydrate                                       |    26.260 |     0.7%
@eslint-react/no-implicit-key                                      |    26.251 |     0.7%
@eslint-react/dom/no-render-return-value                           |    25.879 |     0.7%
@eslint-react/dom/no-render                                        |    25.691 |     0.7%
@eslint-react/no-missing-component-display-name                    |    25.449 |     0.7%
@eslint-react/dom/no-void-elements-with-children                   |    25.205 |     0.7%
@eslint-react/hooks-extra/no-unnecessary-use-callback              |    25.181 |     0.7%
@eslint-react/no-children-to-array                                 |    24.524 |     0.7%
@eslint-react/avoid-shorthand-fragment                             |    24.357 |     0.7%
@eslint-react/web-api/no-leaked-timeout                            |    24.236 |     0.7%
@eslint-react/hooks-extra/prefer-use-state-lazy-initialization     |    22.169 |     0.6%
@eslint-react/no-string-refs                                       |    21.642 |     0.6%
@eslint-react/dom/no-unsafe-iframe-sandbox                         |    20.898 |     0.6%
@eslint-react/no-access-state-in-setstate                          |    20.683 |     0.6%
@eslint-react/prefer-react-namespace-import                        |    20.202 |     0.6%
@eslint-react/dom/no-missing-button-type                           |    19.855 |     0.6%
@eslint-react/no-use-context                                       |    18.639 |     0.5%
@eslint-react/web-api/no-leaked-interval                           |    18.436 |     0.5%
@eslint-react/no-forward-ref                                       |    18.075 |     0.5%
@eslint-react/no-prop-types                                        |    16.976 |     0.5%
@eslint-react/no-context-provider                                  |    16.421 |     0.5%
@eslint-react/naming-convention/context-name                       |    15.711 |     0.4%
@eslint-react/dom/no-missing-iframe-sandbox                        |    15.601 |     0.4%
@eslint-react/no-missing-context-display-name                      |    15.547 |     0.4%
@eslint-react/no-default-props                                     |    15.372 |     0.4%
@eslint-react/dom/no-unsafe-target-blank                           |    15.219 |     0.4%
@eslint-react/dom/no-use-form-state                                |    14.901 |     0.4%
@eslint-react/jsx-uses-react                                       |    14.471 |     0.4%
@eslint-react/no-redundant-should-component-update                 |    14.312 |     0.4%
@eslint-react/dom/no-dangerously-set-innerhtml                     |    14.073 |     0.4%
@eslint-react/dom/no-flush-sync                                    |    13.856 |     0.4%
@eslint-react/no-component-will-mount                              |    13.836 |     0.4%
@eslint-react/dom/no-find-dom-node                                 |    13.070 |     0.4%
@eslint-react/no-misused-capture-owner-stack                       |    13.043 |     0.4%
@eslint-react/no-unsafe-component-will-mount                       |    12.650 |     0.4%
@eslint-react/no-component-will-receive-props                      |    12.367 |     0.3%
@eslint-react/no-set-state-in-component-did-update                 |    12.332 |     0.3%
@eslint-react/no-set-state-in-component-did-mount                  |    12.296 |     0.3%
@eslint-react/no-class-component                                   |    12.148 |     0.3%
@eslint-react/no-duplicate-key                                     |    11.733 |     0.3%
@eslint-react/no-component-will-update                             |    11.732 |     0.3%
@eslint-react/dom/no-dangerously-set-innerhtml-with-children       |    11.172 |     0.3%
@eslint-react/no-set-state-in-component-will-update                |    11.091 |     0.3%
@eslint-react/jsx-no-duplicate-props                               |    11.026 |     0.3%
@eslint-react/web-api/no-leaked-resize-observer                    |    10.354 |     0.3%
@eslint-react/no-direct-mutation-state                             |     7.334 |     0.2%
@eslint-react/no-unsafe-component-will-receive-props               |     7.265 |     0.2%
@eslint-react/no-unsafe-component-will-update                      |     7.228 |     0.2%
@eslint-react/jsx-no-iife                                          |     7.211 |     0.2%
@eslint-react/no-complex-conditional-rendering                     |     6.620 |     0.2%

react-linter-benchmark on  main via ⬢ v24.1.0 took 24s
```
