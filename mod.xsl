<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:oxm="https://www.openxsl.com">
    <xsl:template match="/root" name="wurui.smct-admin">
        <!-- className 'J_OXMod' required  -->
        <div class="J_OXMod oxmod-smct-admin" ox-mod="smct-admin" data-env="{env/domain}">
            <div class="J_list">
                <table width="100%" cellpadding="0" cellspacing="0">
                    <tbody>
                        <tr>
                            <th colspan="2">首页</th>
                        </tr>
                        <tr>
                            <td>
                                <span>...</span>
                                <br/>
                                <label>今日访客</label>
                            </td>
                            <td>
                                <span>...</span>
                                <br/>
                                <label>昨日访客</label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button class="J_refresh">刷新</button>
            </div>
            <script type="text/tpl" class="J_tpl"><![CDATA[
                <table width="100%" cellpadding="0" cellspacing="0">
                    <tbody>
                        {{#.}}
                        <tr>
                            <th colspan="2">{{title}}</th>
                        </tr>
                        <tr>
                            {{#data}}
                            <td>
                                <span">{{uv}}/{{pv}}</span>
                                <br/>
                                <label>{{label}}</label>
                            </td>
                            {{/data}}
                        </tr>
                        {{/.}}
                    </tbody>
                </table>
                <p class="time">{{time}}</p>
                ]]>
            </script>

        </div>
    </xsl:template>
</xsl:stylesheet>
