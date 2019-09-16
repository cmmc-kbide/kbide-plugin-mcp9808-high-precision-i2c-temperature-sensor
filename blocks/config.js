module.exports = [
    {
        name: "MCP9808",
        blocks: [
            {
                xml:
                    `<block type="mcp9808">
                        <value name="MCP9808SDA">
                            <shadow type="math_number">
                                <field name="NUM">21</field>
                            </shadow>
                        </value>
                        <value name="MCP9808SCL">
                            <shadow type="math_number">
                                <field name="NUM">22</field>
                            </shadow>
                        </value>
                     </block>
                     <block type="mcp9808gettemperature">
                     </block>`
            }
        ]
    }
];