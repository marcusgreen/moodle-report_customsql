
import CodeMirror from 'report_customsql/codemirror/lib/codemirror';
import showhint   from 'report_customsql/codemirror/addon/hint/show-hint';
import hint       from 'report_customsql/codemirror/addon/hint/sql-hint';
import mode        from 'report_customsql/codemirror/mode/sql/sql';

export const init = () => {
            var tablejson = document.getElementById('tablejson');
            var AUTOCOMPLETE_TABLES = JSON.parse(tablejson.value);
            var editor=CodeMirror.fromTextArea(document.getElementById('id_querysql'), {
            tabMode: "indent",
            mode: 'text/x-mysql',
            indentUnit: 4,
            matchBrackets: true,
            autoCloseBrackets: true,
            styleActiveLine: true,
            lineNumbers: true,
            extraKeys: {"Ctrl-Space": "autocomplete"}
            });
            editor.setSize('100%',400);
            CodeMirror.commands.autocomplete = function(cm) {
                CodeMirror.showHint(cm, CodeMirror.hint.sql, {
                    tables: AUTOCOMPLETE_TABLES,
                    disableKeywords:true
                });
            }
};
