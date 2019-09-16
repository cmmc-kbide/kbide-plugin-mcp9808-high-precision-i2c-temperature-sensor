Blockly.JavaScript['mcp9808'] = function(block) {
  var variable_mcp98081 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('MCP98081'), Blockly.Variables.NAME_TYPE);
  var text_mcp9808addr = block.getFieldValue('MCP9808ADDR');
  var value_mcp9808sda = Blockly.JavaScript.valueToCode(block, 'MCP9808SDA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_mcp9808scl = Blockly.JavaScript.valueToCode(block, 'MCP9808SCL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
      var code =
      `
#EXTINC#include <Wire.h>#END
#EXTINC#include "Adafruit_MCP9808.h"#END

#VARIABLE
Adafruit_MCP9808 ${variable_mcp98081} = Adafruit_MCP9808();
#END
Wire.begin(${value_mcp9808sda},${value_mcp9808scl});\n
while (!${variable_mcp98081}.begin(${text_mcp9808addr})) {
    Serial.println("Couldn't find MCP9808! Check your connections and verify the address is correct.");
    delay(1000);
 }
 ${variable_mcp98081}.setResolution(3);
\n
`;
  return code;
};
Blockly.JavaScript['mcp9808gettemperature'] = function(block) {
  var variable_mcp98081 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('MCP98081'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_mcp98081}.readTempC()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};