import * as Entity from "./test";

let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

let myFavoriteNumber1;
myFavoriteNumber1 = 'seven';
myFavoriteNumber1 = 7;


type ReqData = {
    name: string;
    code: string;
    code_type: 1 | 2 | 3;
    legal_persona_wechat: string;
    legal_persona_name: string;
};
  
function test(params:{ codeType: Entity.CodeType}): ReqData {
  return {
    name: "王者峡谷",
    code: "2222",
    legal_persona_wechat: "2222",
    legal_persona_name: "兰陵王",
    code_type: {
      [Entity.CodeType.CREDIT_CODE]: 1, 
      [Entity.CodeType.ORGANIZING_CODE]: 2, 
      [Entity.CodeType.BUSINESS_LICENSE_NUMBER]: 3, 
    }[params.codeType] as Entity.CodeType
  }
}

test({
  codeType: Entity.CodeType.CREDIT_CODE
})