import * as assert from "assert";
import * as Unist from "../src/unist-types";

describe("unist-types", () => {
    it("should pass typescript check", () => {
        const AST: Unist.Parent = {
            type: "Root",
            children: [
                {
                    type: "String",
                    data: {
                        myData: "string"
                    }
                },
                {
                    type: "String-position",
                    position: {
                        start: {
                            line: 1,
                            column: 1,
                            offset: 0
                        },
                        end: {
                            line: 1,
                            column: 2,
                            offset: 1
                        },
                        index: 1
                    }
                }
            ]
        };
        assert.ok(AST.children[0].type !== undefined);
        assert.ok(AST.children[0].data !== undefined);
        assert.ok(AST.children[1].position !== undefined);
    });
});
