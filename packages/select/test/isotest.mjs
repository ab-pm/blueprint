/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @ts-check

import "@blueprintjs/test-commons/bootstrap";

import { generateIsomorphicTests } from "@blueprintjs/test-commons";

import Select from "../lib/cjs/index.js";

describe("Select isomorphic rendering", () => {
    generateIsomorphicTests(Select, {
        MultiSelect: {
            props: { items: [], query: "", selectedItems: [], tagRenderer: () => null },
        },
        MultiSelect2: {
            skip: true,
        },
        QueryList: {
            // needs at least one handler or it returns undefined
            props: { renderer: () => null },
            skip: true,
        },
        Select: {
            props: { items: [] },
        },
        Select2: {
            skip: true,
        },
        Suggest: {
            props: { items: [] },
        },
        Suggest2: {
            skip: true,
        },
        Omnibar: {
            props: { items: [], isOpen: true, overlayProps: { usePortal: false } },
        },
    });
});
