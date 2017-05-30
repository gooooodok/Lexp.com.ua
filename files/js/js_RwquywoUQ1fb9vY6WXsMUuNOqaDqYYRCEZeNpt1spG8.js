Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 AJAX HTTP \u043e\u0448\u0438\u0431\u043a\u0430.","HTTP Result Code: !status":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 HTTP: !status","An AJAX HTTP request terminated abnormally.":"HTTP \u0437\u0430\u043f\u0440\u043e\u0441 AJAX \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.","Debugging information follows.":"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.","Path: !uri":"\u041f\u0443\u0442\u044c: !uri","StatusText: !statusText":"\u0421\u0442\u0430\u0442\u0443\u0441\u0422\u0435\u043a\u0441\u0442\u043e\u043c","ResponseText: !responseText":"\u041e\u0442\u0432\u0435\u0442\u0422\u0435\u043a\u0441\u0442\u043e\u043c: !responseText","ReadyState: !readyState":"ReadyState: !readyState","Disabled":"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Edit":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c","Add":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c","Upload":"\u0417\u0430\u043a\u0430\u0447\u0430\u0442\u044c","Configure":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c","All":"\u0412\u0441\u0435","Done":"\u0413\u043e\u0442\u043e\u0432\u043e","Published":"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","Select all rows in this table":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Deselect all rows in this table":"\u0421\u043d\u044f\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u0441\u043e \u0432\u0441\u0435\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e","Please wait...":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...","Hide":"\u0421\u043a\u0440\u044b\u0442\u044c","Loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430","Only files with the following extensions are allowed: %files-allowed.":"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u044f\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u044b \u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %files-allowed.","By @name on @date":"@name, @date","By @name":"@name","Not in menu":"\u041d\u0435 \u0432 \u043c\u0435\u043d\u044e","Alias: @alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c: @alias","No alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c \u043d\u0435 \u0437\u0430\u0434\u0430\u043d","New revision":"\u041d\u043e\u0432\u0430\u044f \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u044f","Drag to re-order":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043c\u043e\u0436\u043d\u043e, \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u044b\u0448\u043a\u043e\u0439.","Changes made in this table will not be saved until the form is submitted.":"\u0421\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443, \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0445.","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0431\u043b\u043e\u043a\u0430\u0445 \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443 \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u043d\u0430\u0436\u043c\u0435\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u003Cem\u003E\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0431\u043b\u043e\u043a\u0438\u003C\/em\u003E.","Show shortcuts":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0432\u0438\u0448","This permission is inherited from the authenticated user role.":"\u042d\u0442\u043e \u043f\u0440\u0430\u0432\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442\u0441\u044f \u043e\u0442 \u0440\u043e\u043b\u0438 \u00ab\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u00bb.","No revision":"\u041d\u0435\u0442 \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u0438","@number comments per page":"@number \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","Requires a title":"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","Not restricted":"\u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","Not customizable":"\u041d\u0435 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0439","Restricted to certain pages":"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0432 \u044d\u0442\u043e\u043c \u0440\u0435\u0433\u0438\u043e\u043d\u0435.","Customize dashboard":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f","Hide summary":"\u0421\u043a\u0440\u044b\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Edit summary":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u043d\u043e\u043d\u0441","Don\u0027t display post information":"\u041d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0430","@title dialog":"\u0414\u0438\u0430\u043b\u043e\u0433 @title","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b %filename \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %extensions.","Re-order rows by numerical weight instead of dragging.":"\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u043e \u0432\u0435\u0441\u0443 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u044f.","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Hide row weights":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Autocomplete popup":"\u0412\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435","Searching for matches...":"\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439...","Hide shortcuts":"\u0421\u043a\u0440\u044b\u0442\u044c \u044f\u0440\u043b\u044b\u043a\u0438","+@count":"+@count","-@count":"-@count","Remove group":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u0435","Apply (all displays)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u0432\u0441\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f)","Revert to default":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c \u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e","Apply (this display)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u044d\u0442\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)","Automatic alias":"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0438\u043d\u043e\u043d\u0438\u043c","New":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c","Available tokens":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u043c\u0430\u0440\u043a\u0435\u0440\u044b","Insert this token into your form":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0442\u043e\u043a\u0435\u043d \u0432 \u0432\u0430\u0448\u0443 \u0444\u043e\u0440\u043c\u0443","First click a text field to insert your tokens into.":"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0432 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c\u0442\u043e\u043a\u0435\u043d\u044b.","Loading token browser...":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u043c\u0435\u0442\u043e\u043a...","No name":"\u0411\u0435\u0437 \u0438\u043c\u0435\u043d\u0438","@label: @value":"@label: @value","Using defaults":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e","No style":"\u041d\u0435\u0442 \u0441\u0442\u0438\u043b\u044f","No title":"\u0411\u0435\u0437 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f","Close":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","Log messages":"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432 \u043b\u043e\u0433","Please select a file.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b.","You are not allowed to operate on more than %num files.":"\u0412\u0430\u043c \u043d\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u0441 %num \u0444\u0430\u0439\u043b\u0430\u043c\u0438.","Please specify dimensions within the allowed range that is from 1x1 to @dimensions.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440 \u0432\u043d\u0443\u0442\u0440\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043d\u043d\u043e\u0433\u043e \u0434\u0438\u0430\u043f\u043e\u0437\u043e\u043d\u0430 \u043e\u0442 1x1 \u0434\u043e @dimensions.","%filename is not an image.":"\u0424\u0430\u0439\u043b %filename \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c.","File browsing is disabled in directory %dir.":"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0444\u0430\u0439\u043b\u043e\u0432 \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d \u0434\u043b\u044f \u043f\u0430\u043f\u043a\u0438 %dir.","Do you want to refresh the current directory?":"\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043f\u0430\u043f\u043a\u0443?","Delete selected files?":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b?","Please select a thumbnail.":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0438\u043d\u0438\u0430\u0442\u044e\u0440\u0443.","You must select at least %num files.":"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 %num \u0444\u0430\u0439\u043b\u043e\u0432.","You can not perform this operation.":"\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u044d\u0442\u0443 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e.","Insert file":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b","Change view":"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0438\u0434","Translatable":"\u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u043c\u044b\u0439","Page Title: @pt":"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b: @pt","No Page Title":"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442","No value":"\u041d\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f","Internal server error. Please see server or PHP logs for error information.":"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u044f\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043b\u043e\u0433 \u043e\u0448\u0438\u0431\u043e\u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 PHP.","Inclusion: @value":"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435: @value","Priority: @value":"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442: @value","CustomMessage: !customMessage":"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435: !customMessage","The response failed verification so will not be processed.":"\u041e\u0442\u0432\u0435\u0442 \u043d\u0435 \u043f\u0440\u043e\u0448\u0435\u043b \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442.","The callback URL is not local and not trusted: !url":"URL-\u0430\u0434\u0440\u0435\u0441 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c: !url","Recent":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439","No results":"\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432","clear":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c","Modules installed within the last week.":"\u041c\u043e\u0434\u0443\u043b\u0438, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","No modules added within the last week.":"\u041d\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","Modules enabled\/disabled within the last week.":"\u041c\u043e\u0434\u0443\u043b\u0438, \u0432\u043a\u043b\u044e\u0447\u0451\u043d\u043d\u044b\u0435\/\u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0435 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","No modules were enabled or disabled within the last week.":"\u041d\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0438\u043b\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u043d\u0435\u0434\u0435\u043b\u0438.","@enabled of @total":"@enabled \u0438\u0437 @total"}} };;

(function ($) {
  Drupal.Panels = Drupal.Panels || {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
(function($) {
  Drupal.behaviors.custom_search = {
    attach: function(context) {

      if (!Drupal.settings.custom_search.solr) {
        // Check if the search box is not empty on submit
        $('form.search-form', context).submit(function(){
          var box = $(this).find('input.custom-search-box');
          if (box.val() != undefined && box.val() == '') {
            $(this).find('input.custom-search-box').addClass('error');
            return false;
          }
          // If basic search is hidden, copy or value to the keys
          if ($(this).find('#edit-keys').parents('div.element-invisible').attr('class') == 'element-invisible') {
            $(this).find('#edit-keys').val($(this).find('#edit-or').val());
            $(this).find('#edit-or').val('');
          }
          return true;
        });
      }

      // Search from target
      $('form.search-form').attr('target', Drupal.settings.custom_search.form_target);

      // Displays Popup.
      $('form.search-form input.custom-search-box', context).bind('click focus', function(e){
        $this = $(this);
        $parentForm = $this.parents('form');
        // check if there's something in the popup and displays it
        var popup = $parentForm.find('fieldset.custom_search-popup');
        if (popup.find('input,select').length && !popup.hasClass('opened')) popup.fadeIn().addClass('opened');
        e.stopPropagation();
      });
      $(document).bind('click focus', function(){
        $('fieldset.custom_search-popup').hide().removeClass('opened');
      });

      // Handle checkboxes
      $('.custom-search-selector input:checkbox', context).each(function(){
        var el = $(this);
        if (el.val() == 'c-all') {
          el.change(function(){
            $(this).parents('.custom-search-selector').find('input:checkbox[value!=c-all]').attr('checked', false);
          });
        }
        else {
          if (el.val().substr(0,2) == 'c-') {
            el.change(function(){
              $('.custom-search-selector input:checkbox').each(function(){
                if ($(this).val().substr(0,2) == 'o-') $(this).attr('checked', false);
              });
              $(this).parents('.custom-search-selector').find('input:checkbox[value=c-all]').attr('checked', false);
            });
          } else {
            el.change(function(){
              $(this).parents('.custom-search-selector').find('input:checkbox[value!='+el.val()+']').attr('checked', false);
            });
          }
        }
      });

      // Reselect types and terms in advanced search
      var edit_keys = $('#edit-keys').val();
      if(edit_keys) {
        // types
        var pos = edit_keys.indexOf('type:');
        if (pos) {
          var pos2 = edit_keys.indexOf(' ',pos);
          if (pos2==-1) pos2 = edit_keys.length;
          var types = edit_keys.substring(pos+5,pos2);
          types = types.split(',');
          for (var i=0; i<types.length; i++) {
            $('.search-form input:checkbox[value='+types[i]+']').attr('checked', true);
          }
        }
        // terms
        var pos = edit_keys.indexOf('term:');
        if (pos) {
          var pos2 = edit_keys.indexOf(' ',pos);
          if (pos2==-1) pos2 = edit_keys.length;
          var terms = edit_keys.substring(pos+5,pos2);
          terms = terms.split(',');
          for (var i=0; i<terms.length; i++) {
            $('#edit-term option[value='+terms[i]+']').attr('selected', true);
          }
        }
        // languages
        var pos = edit_keys.indexOf('language:');
        if (pos) {
          var pos2 = edit_keys.indexOf(' ',pos);
          if (pos2==-1) pos2 = edit_keys.length;
          var languages = edit_keys.substring(pos+9,pos2);
          languages = languages.split(',');
          for (var i=0; i<languages.length; i++) {
            $('.search-advanced #edit-language-'+languages[i]).attr('checked', true);
          }
        }
      }

      var popup = $('fieldset.custom_search-popup:not(.custom_search-processed)', context).addClass("custom_search-processed");
      popup.click(function(e){
        e.stopPropagation();
      })
      popup.append('<a class="custom_search-popup-close" href="#">' + Drupal.t('Close') + '</a>');
      $('a.custom_search-popup-close').click(function(e){
        $('fieldset.custom_search-popup.opened').hide().removeClass('opened');
        e.preventDefault();
      });

    }
  }
})(jQuery);;

/**
 * JavaScript behaviors for the front-end display of webforms.
 */

(function ($) {

Drupal.behaviors.webform = Drupal.behaviors.webform || {};

Drupal.behaviors.webform.attach = function(context) {
  // Calendar datepicker behavior.
  Drupal.webform.datepicker(context);
};

Drupal.webform = Drupal.webform || {};

Drupal.webform.datepicker = function(context) {
  $('div.webform-datepicker').each(function() {
    var $webformDatepicker = $(this);
    var $calendar = $webformDatepicker.find('input.webform-calendar');

    // Ensure the page we're on actually contains a datepicker.
    if ($calendar.length == 0) { 
      return;
    }

    var startDate = $calendar[0].className.replace(/.*webform-calendar-start-(\d{4}-\d{2}-\d{2}).*/, '$1').split('-');
    var endDate = $calendar[0].className.replace(/.*webform-calendar-end-(\d{4}-\d{2}-\d{2}).*/, '$1').split('-');
    var firstDay = $calendar[0].className.replace(/.*webform-calendar-day-(\d).*/, '$1');
    // Convert date strings into actual Date objects.
    startDate = new Date(startDate[0], startDate[1] - 1, startDate[2]);
    endDate = new Date(endDate[0], endDate[1] - 1, endDate[2]);

    // Ensure that start comes before end for datepicker.
    if (startDate > endDate) {
      var laterDate = startDate;
      startDate = endDate;
      endDate = laterDate;
    }

    var startYear = startDate.getFullYear();
    var endYear = endDate.getFullYear();

    // Set up the jQuery datepicker element.
    $calendar.datepicker({
      dateFormat: 'yy-mm-dd',
      yearRange: startYear + ':' + endYear,
      firstDay: parseInt(firstDay),
      minDate: startDate,
      maxDate: endDate,
      onSelect: function(dateText, inst) {
        var date = dateText.split('-');
        $webformDatepicker.find('select.year, input.year').val(+date[0]).trigger('change');
        $webformDatepicker.find('select.month').val(+date[1]).trigger('change');
        $webformDatepicker.find('select.day').val(+date[2]).trigger('change');
      },
      beforeShow: function(input, inst) {
        // Get the select list values.
        var year = $webformDatepicker.find('select.year, input.year').val();
        var month = $webformDatepicker.find('select.month').val();
        var day = $webformDatepicker.find('select.day').val();

        // If empty, default to the current year/month/day in the popup.
        var today = new Date();
        year = year ? year : today.getFullYear();
        month = month ? month : today.getMonth() + 1;
        day = day ? day : today.getDate();

        // Make sure that the default year fits in the available options.
        year = (year < startYear || year > endYear) ? startYear : year;

        // jQuery UI Datepicker will read the input field and base its date off
        // of that, even though in our case the input field is a button.
        $(input).val(year + '-' + month + '-' + day);
      }
    });

    // Prevent the calendar button from submitting the form.
    $calendar.click(function(event) {
      $(this).focus();
      event.preventDefault();
    });
  });
}

})(jQuery);
;
