"use strict";
exports.__esModule = true;
var Entity = require("./test");
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
var myFavoriteNumber1;
myFavoriteNumber1 = 'seven';
myFavoriteNumber1 = 7;
function test(params) {
    var _a;
    return {
        name: "王者峡谷",
        code: "2222",
        legal_persona_wechat: "2222",
        legal_persona_name: "兰陵王",
        code_type: (_a = {},
            _a[Entity.CodeType.CREDIT_CODE] = 1,
            _a[Entity.CodeType.ORGANIZING_CODE] = 2,
            _a[Entity.CodeType.BUSINESS_LICENSE_NUMBER] = 3,
            _a)[params.codeType]
    };
}
test({
    codeType: Entity.CodeType.CREDIT_CODE
});
