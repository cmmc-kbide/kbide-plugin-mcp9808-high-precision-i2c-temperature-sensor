Blockly.Blocks['mcp9808'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("MCP98081", null,["Plugin.MCP9808"], ["Plugin.MCP9808"]), "MCP98081")
        .appendField("begin ADDR")
        .appendField(new Blockly.FieldTextInput("0x18"), "MCP9808ADDR");
    this.appendValueInput("MCP9808SDA")
        .setCheck("Number")
        .appendField("SDA PIN");
    this.appendValueInput("MCP9808SCL")
        .setCheck("Number")
        .appendField("SCL PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['mcp9808gettemperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("MCP98081", null,["Plugin.MCP9808"], ["Plugin.MCP9808"]), "MCP98081")
        .appendField("GetTemperature");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};