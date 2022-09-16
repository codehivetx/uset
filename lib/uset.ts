/**
 * Copyright (c) 2022 Code Hive Tx, LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * An implementation of UnicodeSet in TypeScript / JavaScript
 */
class USet {
    chars: Set<string>;
    strs: Set<string>;
    constructor(pattern?: string) {
        this.chars = new Set();
        this.strs = new Set();
        this.applyPattern(pattern);
    }

    applyPattern(pattern?: string) {
        this.strs.clear();
        this.chars.clear();
        if (pattern) {
            if (!pattern.startsWith('[') || !pattern.endsWith(']')) {
                throw Error(`Malformed USet pattern (no [])`);
            }
            // let sawBackslash: boolean = false;
            // let inRange: boolean = false;
            for (const ch of pattern.slice(1, pattern.length - 1)) {
                if (ch === ' ') { // or others
                    continue;
                }
                if (ch === '-' || ch === '\\' || ch === '^' || ch === ':' || ch === '&' ||
                    ch === '{' || ch === '}' || ch === '[' || ch === ']') {
                    throw Error(`Sorry, USet does not yet support ${ch}`);
                }
                this.add(ch);
            }
        }
    }

    /**
     * Add a single Unicode character.
     * @param ch single character
     */
    add(ch: string) {
        if(!ch) {
            throw Error(`add() called without a character`);
        }
        if (ch.length > 2) {
            throw Error(`${ch} is not a single codepoint`);
        }
        this.chars.add(ch);
        return this;
    }
    /**
     * Add a multicharacter string
     * @param str string
     */
    addString(str: string) {
        this.strs.add(str);
        return this;
    }

    /**
     *
     * @returns Serialized format of the set
     */
    toString() : string {
        let out : string = "[";
        Array.from(this.chars).sort().forEach(c => out += c);
        Array.from(this.strs).sort().forEach(s => out += `{${s}}`);
        out += "]";
        return out;
    }

    /**
     *
     * @returns Iterator over all char values
     */
    charValues() : Array<String> {
        return Array.from(this.chars.values()).sort();
    }

    /**
     *
     * @returns Iterator over all string values
     */
    stringValues() : Array<String> {
        return Array.from(this.strs.values()).sort();
    }
};


export { USet };
