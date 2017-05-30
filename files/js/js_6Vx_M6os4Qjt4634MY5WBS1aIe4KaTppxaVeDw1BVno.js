Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"\u0421\u0442\u0430\u043b\u0430\u0441\u044c \u043f\u043e\u043c\u0438\u043b\u043a\u0430 AJAX HTTP","HTTP Result Code: !status":"HTTP \u043a\u043e\u0434 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456: !status","An AJAX HTTP request terminated abnormally.":"\u0417\u0430\u043f\u0438\u0442 AJAX HTTP \u043d\u0435\u0441\u043f\u043e\u0434\u0456\u0432\u0430\u043d\u043e \u043e\u0431\u0456\u0440\u0432\u0430\u0432\u0441\u044f","Debugging information follows.":"\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u0434\u043b\u044f \u0432\u0456\u0434\u043b\u0430\u0434\u043a\u0438 \u043d\u0430\u0434\u0430\u0454\u0442\u044c\u0441\u044f","Path: !uri":"\u0428\u043b\u044f\u0445: !uri","StatusText: !statusText":"\u0421\u0442\u0430\u0442\u0443\u0441: !statusText","ResponseText: !responseText":"\u0422\u0435\u043a\u0441\u0442 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456: !responseText","ReadyState: !readyState":"\u0421\u0442\u0430\u0442\u0443\u0441 \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0456: !readyState","Disabled":"\u0412\u0438\u043c\u043a\u043d\u0435\u043d\u043e","Edit":"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438","Add":"\u0414\u043e\u0434\u0430\u0442\u0438","Upload":"\u0412\u0456\u0434\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438","Configure":"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438","All":"\u0412\u0441\u0435","Done":"\u0413\u043e\u0442\u043e\u0432\u043e","Published":"\u041e\u043f\u0443\u0431\u043b\u0456\u043a\u043e\u0432\u0430\u043d\u043e","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438","Select all rows in this table":"\u041e\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0456 \u0440\u044f\u0434\u043a\u0438 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0456","Deselect all rows in this table":"\u0417\u043d\u044f\u0442\u0438 \u0432\u0438\u0431\u0456\u0440 \u0432\u0441\u0456\u0445 \u0440\u044f\u0434\u043a\u0456\u0432","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0456\u043a\u043e\u0432\u0430\u043d\u043e","Please wait...":"\u0417\u0430\u0447\u0435\u043a\u0430\u0439\u0442\u0435, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430...","Hide":"\u0421\u0445\u043e\u0432\u0430\u0442\u0438","Loading":"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f","Only files with the following extensions are allowed: %files-allowed.":"\u041c\u043e\u0436\u043d\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u043b\u0438\u0448\u0435 \u0444\u0430\u0439\u043b\u0438 \u0437 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u043c\u0438 \u0440\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043d\u044f\u043c\u0438: %files-allowed.","By @name on @date":"@name, @date","By @name":"@name","Not in menu":"\u041d\u0435 \u0432 \u043c\u0435\u043d\u044e","Alias: @alias":"\u0421\u0438\u043d\u043e\u043d\u0456\u043c: @alias","No alias":"\u0412\u0456\u0434\u0441\u0443\u0442\u043d\u0456\u0439 \u0441\u0438\u043d\u043e\u043d\u0456\u043c","New revision":"\u041d\u043e\u0432\u0430 \u0440\u0435\u0434\u0430\u043a\u0446\u0456\u044f","Drag to re-order":"\u041f\u0435\u0440\u0435\u0442\u044f\u0433\u043d\u0443\u0442\u0438 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0441\u043e\u0440\u0442\u0443\u0432\u0430\u043d\u043d\u044f","Changes made in this table will not be saved until the form is submitted.":"\u0417\u043c\u0456\u043d\u0438, \u0449\u043e \u0431\u0443\u043b\u0438 \u0437\u0440\u043e\u0431\u043b\u0435\u043d\u0456 \u0432 \u0446\u0456\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0456, \u043d\u0435 \u0431\u0443\u0434\u0443\u0442\u044c \u043f\u0440\u0438\u0439\u043d\u044f\u0442\u0456 \u0434\u043e\u043a\u0438 \u0412\u0438 \u043d\u0435 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u0442\u0435 \u0446\u044e \u0444\u043e\u0440\u043c\u0443.","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"\u0417\u043c\u0456\u043d\u0438 \u0434\u043e \u043d\u043e\u0432\u043e\u0433\u043e \u0440\u043e\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043d\u043d\u044f \u0431\u043b\u043e\u043a\u0456\u0432 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442\u044c \u0437\u0431\u0435\u0440\u0435\u0434\u0435\u043d\u0456, \u0434\u043e\u043a\u0438 \u0412\u0438 \u043d\u0435 \u043d\u0430\u0442\u0438\u0441\u043d\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \u003Cem\u003E\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0431\u043b\u043e\u043a\u0438\u003C\/em\u003E.","Show shortcuts":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u043a\u043e\u043c\u0431\u0456\u043d\u0430\u0446\u0456\u0457 \u043a\u043b\u0430\u0432\u0456\u0448","This permission is inherited from the authenticated user role.":"\u0426\u0435 \u043f\u043e\u0432\u043d\u043e\u0432\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0441\u043f\u0430\u0434\u043a\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0432\u0456\u0434 \u0440\u043e\u043b\u0456 \u0022\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0022.","No revision":"\u041d\u0435\u043c\u0430\u0454 \u0440\u0435\u0434\u0430\u043a\u0446\u0456\u0439","@number comments per page":"@number \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456\u0432 \u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443","Requires a title":"\u041f\u043e\u0442\u0440\u0456\u0431\u0435\u043d \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","Not restricted":"\u0411\u0435\u0437 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u044c","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430 \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","Not customizable":"\u041d\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0456\u0437\u0443\u0454\u0442\u044c\u0441\u044f","Restricted to certain pages":"\u0422\u0456\u043b\u044c\u043a\u0438 \u0434\u043b\u044f \u043f\u0435\u0432\u043d\u0438\u0445 \u0441\u0442\u043e\u0440\u0456\u043d\u043e\u043a","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u0440\u043e\u0437\u0442\u0430\u0448\u043e\u0432\u0430\u043d\u0438\u0439 \u0432 \u0446\u0456\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0456.","Customize dashboard":"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0456\u0437\u0443\u0432\u0430\u0442\u0438 \u043f\u0430\u043d\u0435\u043b\u044c","Hide summary":"\u0421\u0445\u043e\u0432\u0430\u0442\u0438 \u0440\u0435\u0437\u044e\u043c\u0435","Edit summary":"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0440\u0435\u0437\u044e\u043c\u0435","Don\u0027t display post information":"\u041d\u0435 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u0438 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044e \u043f\u0440\u043e \u043f\u0443\u0431\u043b\u0456\u043a\u0430\u0446\u0456\u044e","@title dialog":"@title \u0434\u0456\u0430\u043b\u043e\u0433","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"\u041d\u0435\u043c\u043e\u0436\u043b\u0438\u0432\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u0438 \u0432\u0438\u0431\u0440\u0430\u043d\u0438\u0439 \u0444\u0430\u0439\u043b %filename. \u041f\u0440\u0438\u043f\u0443\u0441\u0442\u0438\u043c\u0438\u043c\u0438 \u0454 \u043b\u0438\u0448\u0435 \u0444\u0430\u0439\u043b\u0438 \u0437 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u043c\u0438 \u0440\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043d\u044f\u043c\u0438: %extensions.","Re-order rows by numerical weight instead of dragging.":"\u041f\u0435\u0440\u0435\u0441\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0440\u044f\u0434\u043a\u0438 \u0437\u0430 \u0432\u0430\u0433\u043e\u044e \u0446\u0438\u0444\u0440 \u043d\u0430 \u0432\u0456\u0434\u043c\u0456\u043d\u0443 \u0432\u0456\u0434 \u043f\u0435\u0440\u0435\u0442\u044f\u0433\u0443\u0432\u0430\u043d\u043d\u044f","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0432\u0430\u0433\u0443 \u0440\u044f\u0434\u043a\u0456\u0432","Hide row weights":"\u0421\u0445\u043e\u0432\u0430\u0442\u0438 \u0432\u0430\u0433\u0443 \u0440\u044f\u0434\u043a\u0456\u0432","Autocomplete popup":"\u0421\u043f\u043b\u0438\u0432\u0430\u044e\u0447\u0435 \u0430\u0432\u0442\u043e\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044f","Searching for matches...":"\u041f\u043e\u0448\u0443\u043a \u0437\u0431\u0456\u0433\u0456\u0432...","Hide shortcuts":"\u0421\u0445\u043e\u0432\u0430\u0442\u0438 \u0448\u0432\u0438\u0434\u043a\u0456 \u043a\u043d\u043e\u043f\u043a\u0438","Remove group":"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0433\u0440\u0443\u043f\u0443","Apply (all displays)":"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438 (\u0434\u043b\u044f \u0432\u0441\u0456\u0445 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c)","Revert to default":"\u0421\u043a\u0438\u043d\u0443\u0442\u0438 \u0434\u043e \u043f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u044c","Apply (this display)":"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438 (\u0434\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f)","Automatic alias":"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u0456 \u0441\u0438\u043d\u043e\u043d\u0456\u043c\u0438","New":"\u041d\u043e\u0432\u0438\u0439","Available tokens":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0456 \u043c\u0430\u0440\u043a\u0435\u0440\u0438","Insert this token into your form":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0446\u0435\u0439 \u0437\u0430\u043c\u0456\u043d\u043d\u0438\u043a \u0443 \u0432\u0430\u0448\u0443 \u0444\u043e\u0440\u043c\u0443","First click a text field to insert your tokens into.":"\u0429\u043e\u0431 \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043c\u0430\u0440\u043a\u0435\u0440 \u043a\u043b\u0430\u0446\u043d\u0456\u0442\u044c \u0441\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u0432 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u043c\u0443 \u043f\u043e\u043b\u0456.","Loading token browser...":"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0454\u0442\u044c\u0441\u044f \u043e\u0433\u043b\u044f\u0434\u0430\u0447 \u043c\u0430\u0440\u043a\u0435\u0440\u0456\u0432...","No name":"\u0411\u0435\u0437 \u0456\u043c\u0435\u043d\u0456","@label: @value":"@label: @value","Using defaults":"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0443\u043c\u043e\u0432\u0447\u0430\u043d\u044c","No style":"\u041d\u0435\u043c\u0430\u0454 \u0441\u0442\u0438\u043b\u044e","No title":"\u0411\u0435\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0443","Close":"\u0417\u0430\u043a\u0440\u0438\u0442\u0438","Log messages":"\u041f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u0432 \u0436\u0443\u0440\u043d\u0430\u043b","Please select a file.":"\u0411\u0443\u0434\u044c-\u043b\u0430\u0441\u043a\u0430 \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0444\u0430\u0439\u043b.","You are not allowed to operate on more than %num files.":"\u0412\u0430\u043c \u043d\u0435 \u0434\u043e\u0437\u0432\u043e\u043b\u0435\u043d\u043e \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0431\u0456\u043b\u044c\u0448\u0435 \u043d\u0456\u0436 %num \u0444\u0430\u0439\u043b\u0430\u043c\u0438.","Please specify dimensions within the allowed range that is from 1x1 to @dimensions.":"\u0411\u0443\u0434\u044c-\u043b\u0430\u0441\u043a\u0430 \u0432\u043a\u0430\u0436\u0456\u0442\u044c \u0440\u043e\u0437\u043c\u0456\u0440 \u0432 \u0434\u043e\u0437\u0432\u043e\u043b\u0435\u043d\u0438\u0445 \u043c\u0435\u0436\u0430\u0445 \u0432\u0456\u0434 1x1 \u0434\u043e @dimensions.","%filename is not an image.":"%filename \u043d\u0435 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f.","File browsing is disabled in directory %dir.":"\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u0434 \u0444\u0430\u0439\u043b\u0456\u0432 \u0437\u0430\u0431\u043e\u0440\u043e\u043d\u0435\u043d\u0438\u0439 \u0434\u043b\u044f \u043f\u0430\u043f\u043a\u0438 %dir.","Do you want to refresh the current directory?":"\u0412\u0438 \u043f\u0440\u0430\u0433\u043d\u0435\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0438 \u043f\u043e\u0442\u043e\u0447\u043d\u0443 \u043f\u0430\u043f\u043a\u0443?","Delete selected files?":"\u0412\u0438\u043b\u0443\u0447\u0438\u0442\u0438 \u043e\u0431\u0440\u0430\u043d\u0456 \u0444\u0430\u0439\u043b\u0438?","Please select a thumbnail.":"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u0434.","You must select at least %num files.":"\u0412\u0438 \u043f\u043e\u0432\u0438\u043d\u043d\u0456 \u0432\u0438\u0431\u0440\u0430\u0442\u0438 \u0445\u043e\u0447\u0430 \u0431 %num \u0444\u0430\u0439\u043b\u0456\u0432.","You can not perform this operation.":"\u0412\u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u0442\u0438 \u0446\u044e \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u044e","Insert file":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0444\u0430\u0439\u043b","Change view":"\u0417\u043c\u0456\u043d\u0438\u0442\u0438 \u0432\u0438\u0433\u043b\u044f\u0434","Translatable":"\u041f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0430\u0454\u0442\u044c\u0441\u044f","Not translatable":"\u041d\u0435 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0430\u0454\u0442\u044c\u0441\u044f","Restricted to certain languages":"\u041e\u0431\u043c\u0435\u0436\u0435\u043d\u043e \u043f\u0435\u0432\u043d\u0438\u043c\u0438 \u043c\u043e\u0432\u0430\u043c\u0438","Page Title: @pt":"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0438: @pt","No Page Title":"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456\u0439","Internal server error. Please see server or PHP logs for error information.":"\u0412\u043d\u0443\u0442\u0440\u0456\u0448\u043d\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044e \u043f\u0440\u043e \u043f\u043e\u043c\u0438\u043b\u043a\u0443 \u0434\u0438\u0432\u0456\u0442\u044c\u0441\u044f \u0443 \u0436\u0443\u0440\u043d\u0430\u043b\u0430\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0447\u0438 PHP.","Inclusion: @value":"\u0414\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044f: @value","Priority: @value":"\u041f\u0440\u0456\u043e\u0440\u0438\u0442\u0435\u0442: @value","Content can only be inserted into CKEditor in the WYSIWYG mode.":"\u0412\u043c\u0456\u0441\u0442 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u0432\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439 \u0432 CKEditor \u043b\u0438\u0448\u0435 \u0432 \u0440\u0435\u0436\u0438\u043c\u0456 WYSIWYG.","CustomMessage: !customMessage":"\u0412\u043b\u0430\u0441\u043d\u0435 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f: !customMessage","The response failed verification so will not be processed.":"\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u043d\u0435 \u043f\u0440\u043e\u0439\u0448\u043b\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0443 \u0442\u043e\u043c\u0443 \u043e\u0431\u0440\u043e\u0431\u043b\u044f\u0442\u0438\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0435.","The callback URL is not local and not trusted: !url":"URL \u0437\u0432\u043e\u0440\u043e\u0442\u043d\u044c\u043e\u0433\u043e \u0437\u0432\u2019\u044f\u0437\u043a\u0443 \u043d\u0435 \u0454 \u043d\u0456 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u0438\u043c, \u043d\u0456 \u0434\u043e\u0432\u0456\u0440\u0435\u043d\u0438\u043c: !url","Recent":"\u041e\u0441\u0442\u0430\u043d\u043d\u0456","Ignored from settings":"\u0406\u0433\u043d\u043e\u0440\u043e\u0432\u0430\u043d\u043e \u0437 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u044c","No results":"\u041d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e","clear":"\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u0438","Modules installed within the last week.":"\u041c\u043e\u0434\u0443\u043b\u0456, \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0456 \u0437\u0430 \u043e\u0441\u0442\u0430\u043d\u043d\u0456\u0439 \u0442\u0438\u0436\u0434\u0435\u043d\u044c.","No modules added within the last week.":"\u0417\u0430 \u043e\u0441\u0442\u0430\u043d\u043d\u0456\u0439 \u0442\u0438\u0436\u0434\u0435\u043d\u044c \u0436\u043e\u0434\u043d\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0456\u0432 \u043d\u0435 \u0434\u043e\u0434\u0430\u0432\u0430\u043b\u043e\u0441\u044f.","Modules enabled\/disabled within the last week.":"\u041c\u043e\u0434\u0443\u043b\u0456, \u0443\u0432\u0456\u043c\u043a\u043d\u0435\u043d\u0456\/\u0432\u0438\u043c\u043a\u043d\u0435\u043d\u0456 \u0437\u0430 \u043e\u0441\u0442\u0430\u043d\u043d\u0456\u0439 \u0442\u0438\u0436\u0434\u0435\u043d\u044c.","No modules were enabled or disabled within the last week.":"\u0417\u0430 \u043e\u0441\u0442\u0430\u043d\u043d\u0456\u0439 \u0442\u0438\u0436\u0434\u0435\u043d\u044c \u0436\u043e\u0434\u043d\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0456\u0432 \u043d\u0435 \u0432\u043c\u0438\u043a\u0430\u043b\u043e\u0441\u044f \u0456 \u043d\u0435 \u0432\u0438\u043c\u0438\u043a\u0430\u043b\u043e\u0441\u044f.","@enabled of @total":"@enabled \u0437 @total"}} };;

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
(function ($) {

/**
 * Attaches sticky table headers.
 */
Drupal.behaviors.tableHeader = {
  attach: function (context, settings) {
    if (!$.support.positionFixed) {
      return;
    }

    $('table.sticky-enabled', context).once('tableheader', function () {
      $(this).data("drupal-tableheader", new Drupal.tableHeader(this));
    });
  }
};

/**
 * Constructor for the tableHeader object. Provides sticky table headers.
 *
 * @param table
 *   DOM object for the table to add a sticky header to.
 */
Drupal.tableHeader = function (table) {
  var self = this;

  this.originalTable = $(table);
  this.originalHeader = $(table).children('thead');
  this.originalHeaderCells = this.originalHeader.find('> tr > th');
  this.displayWeight = null;

  // React to columns change to avoid making checks in the scroll callback.
  this.originalTable.bind('columnschange', function (e, display) {
    // This will force header size to be calculated on scroll.
    self.widthCalculated = (self.displayWeight !== null && self.displayWeight === display);
    self.displayWeight = display;
  });

  // Clone the table header so it inherits original jQuery properties. Hide
  // the table to avoid a flash of the header clone upon page load.
  this.stickyTable = $('<table class="sticky-header"/>')
    .insertBefore(this.originalTable)
    .css({ position: 'fixed', top: '0px' });
  this.stickyHeader = this.originalHeader.clone(true)
    .hide()
    .appendTo(this.stickyTable);
  this.stickyHeaderCells = this.stickyHeader.find('> tr > th');

  this.originalTable.addClass('sticky-table');
  $(window)
    .bind('scroll.drupal-tableheader', $.proxy(this, 'eventhandlerRecalculateStickyHeader'))
    .bind('resize.drupal-tableheader', { calculateWidth: true }, $.proxy(this, 'eventhandlerRecalculateStickyHeader'))
    // Make sure the anchor being scrolled into view is not hidden beneath the
    // sticky table header. Adjust the scrollTop if it does.
    .bind('drupalDisplaceAnchor.drupal-tableheader', function () {
      window.scrollBy(0, -self.stickyTable.outerHeight());
    })
    // Make sure the element being focused is not hidden beneath the sticky
    // table header. Adjust the scrollTop if it does.
    .bind('drupalDisplaceFocus.drupal-tableheader', function (event) {
      if (self.stickyVisible && event.clientY < (self.stickyOffsetTop + self.stickyTable.outerHeight()) && event.$target.closest('sticky-header').length === 0) {
        window.scrollBy(0, -self.stickyTable.outerHeight());
      }
    })
    .triggerHandler('resize.drupal-tableheader');

  // We hid the header to avoid it showing up erroneously on page load;
  // we need to unhide it now so that it will show up when expected.
  this.stickyHeader.show();
};

/**
 * Event handler: recalculates position of the sticky table header.
 *
 * @param event
 *   Event being triggered.
 */
Drupal.tableHeader.prototype.eventhandlerRecalculateStickyHeader = function (event) {
  var self = this;
  var calculateWidth = event.data && event.data.calculateWidth;

  // Reset top position of sticky table headers to the current top offset.
  this.stickyOffsetTop = Drupal.settings.tableHeaderOffset ? eval(Drupal.settings.tableHeaderOffset + '()') : 0;
  this.stickyTable.css('top', this.stickyOffsetTop + 'px');

  // Save positioning data.
  var viewHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  if (calculateWidth || this.viewHeight !== viewHeight) {
    this.viewHeight = viewHeight;
    this.vPosition = this.originalTable.offset().top - 4 - this.stickyOffsetTop;
    this.hPosition = this.originalTable.offset().left;
    this.vLength = this.originalTable[0].clientHeight - 100;
    calculateWidth = true;
  }

  // Track horizontal positioning relative to the viewport and set visibility.
  var hScroll = document.documentElement.scrollLeft || document.body.scrollLeft;
  var vOffset = (document.documentElement.scrollTop || document.body.scrollTop) - this.vPosition;
  this.stickyVisible = vOffset > 0 && vOffset < this.vLength;
  this.stickyTable.css({ left: (-hScroll + this.hPosition) + 'px', visibility: this.stickyVisible ? 'visible' : 'hidden' });

  // Only perform expensive calculations if the sticky header is actually
  // visible or when forced.
  if (this.stickyVisible && (calculateWidth || !this.widthCalculated)) {
    this.widthCalculated = true;
    var $that = null;
    var $stickyCell = null;
    var display = null;
    var cellWidth = null;
    // Resize header and its cell widths.
    // Only apply width to visible table cells. This prevents the header from
    // displaying incorrectly when the sticky header is no longer visible.
    for (var i = 0, il = this.originalHeaderCells.length; i < il; i += 1) {
      $that = $(this.originalHeaderCells[i]);
      $stickyCell = this.stickyHeaderCells.eq($that.index());
      display = $that.css('display');
      if (display !== 'none') {
        cellWidth = $that.css('width');
        // Exception for IE7.
        if (cellWidth === 'auto') {
          cellWidth = $that[0].clientWidth + 'px';
        }
        $stickyCell.css({'width': cellWidth, 'display': display});
      }
      else {
        $stickyCell.css('display', 'none');
      }
    }
    this.stickyTable.css('width', this.originalTable.outerWidth());
  }
};

})(jQuery);
;
(function ($) {

Drupal.ModuleFilter = {};

Drupal.ModuleFilter.explode = function(string) {
  var queryArray = string.match(/([a-zA-Z]+\:(\w+|"[^"]+")*)|\w+|"[^"]+"/g);
  if (!queryArray) {
    queryArray = new Array();
  }
  var i = queryArray.length;
  while (i--) {
    queryArray[i] = queryArray[i].replace(/"/g, "");
  }
  return queryArray;
};

Drupal.ModuleFilter.getState = function(key) {
  if (!Drupal.ModuleFilter.state) {
    Drupal.ModuleFilter.state = {};
    var cookie = $.cookie('DrupalModuleFilter');
    var query = cookie ? cookie.split('&') : [];
    if (query) {
      for (var i in query) {
        // Extra check to avoid js errors in Chrome, IE and Safari when
        // combined with JS like twitter's widget.js.
        // See http://drupal.org/node/798764.
        if (typeof(query[i]) == 'string' && query[i].indexOf('=') != -1) {
          var values = query[i].split('=');
          if (values.length === 2) {
            Drupal.ModuleFilter.state[values[0]] = values[1];
          }
        }
      }
    }
  }
  return Drupal.ModuleFilter.state[key] ? Drupal.ModuleFilter.state[key] : false;
};

Drupal.ModuleFilter.setState = function(key, value) {
  var existing = Drupal.ModuleFilter.getState(key);
  if (existing != value) {
    Drupal.ModuleFilter.state[key] = value;
    var query = [];
    for (var i in Drupal.ModuleFilter.state) {
      query.push(i + '=' + Drupal.ModuleFilter.state[i]);
    }
    $.cookie('DrupalModuleFilter', query.join('&'), { expires: 7, path: '/' });
  }
};

Drupal.ModuleFilter.Filter = function(element, selector, options) {
  var self = this;

  this.element = element;
  this.text = $(this.element).val();

  this.settings = Drupal.settings.moduleFilter;

  this.selector = selector;

  this.options = $.extend({
    delay: 500,
    striping: false,
    childSelector: null,
    empty: Drupal.t('No results'),
    rules: new Array()
  }, options);
  if (this.options.wrapper == undefined) {
    this.options.wrapper = $(self.selector).parent();
  }

  // Add clear button.
  this.element.after('<div class="module-filter-clear"><a href="#" class="js-hide">' + Drupal.t('clear') + '</a></div>');
  if (this.text) {
    $('.module-filter-clear a', this.element.parent()).removeClass('js-hide');
  }
  $('.module-filter-clear a', this.element.parent()).click(function() {
    self.element.val('');
    self.text = '';
    delete self.queries;
    self.applyFilter();
    self.element.focus();
    $(this).addClass('js-hide');
    return false;
  });

  this.updateQueries = function() {
    var queryStrings = Drupal.ModuleFilter.explode(self.text);

    self.queries = new Array();
    for (var i in queryStrings) {
      var query = { operator: 'text', string: queryStrings[i] };

      if (self.operators != undefined) {
        // Check if an operator is possibly used.
        if (queryStrings[i].indexOf(':') > 0) {
          // Determine operator used.
          var args = queryStrings[i].split(':', 2);
          var operator = args.shift();
          if (self.operators[operator] != undefined) {
            query.operator = operator;
            query.string = args.shift();
          }
        }
      }

      query.string = query.string.toLowerCase();

      self.queries.push(query);
    }

    if (self.queries.length <= 0) {
      // Add a blank string query.
      self.queries.push({ operator: 'text', string: '' });
    }
  };

  this.applyFilter = function() {
    self.results = new Array();

    self.updateQueries();

    if (self.index == undefined) {
      self.buildIndex();
    }

    self.element.trigger('moduleFilter:start');

    $.each(self.index, function(key, item) {
      var $item = item.element;

      for (var i in self.queries) {
        var query = self.queries[i];
        if (query.operator == 'text') {
          if (item.text.indexOf(query.string) < 0) {
            continue;
          }
        }
        else {
          var func = self.operators[query.operator];
          if (!(func(query.string, self, item))) {
            continue;
          }
        }

        var rulesResult = self.processRules(item);
        if (rulesResult !== false) {
          return true;
        }
      }

      $item.addClass('js-hide');
    });

    self.element.trigger('moduleFilter:finish', { results: self.results });

    if (self.options.striping) {
      self.stripe();
    }

    if (self.results.length > 0) {
      self.options.wrapper.find('.module-filter-no-results').remove();
    }
    else {
      if (!self.options.wrapper.find('.module-filter-no-results').length) {
        self.options.wrapper.append($('<p class="module-filter-no-results"/>').text(self.options.empty));
      };
    }
  };

  self.element.keyup(function(e) {
    switch (e.which) {
      case 13:
        if (self.timeOut) {
          clearTimeout(self.timeOut);
        }
        self.applyFilter();
        break;
      default:
        if (self.text != $(this).val()) {
          if (self.timeOut) {
            clearTimeout(self.timeOut);
          }

          self.text = $(this).val();

          if (self.text) {
            self.element.parent().find('.module-filter-clear a').removeClass('js-hide');
          }
          else {
            self.element.parent().find('.module-filter-clear a').addClass('js-hide');
          }

          self.element.trigger('moduleFilter:keyup');

          self.timeOut = setTimeout(self.applyFilter, self.options.delay);
        }
        break;
    }
  });

  self.element.keypress(function(e) {
    if (e.which == 13) e.preventDefault();
  });
};

Drupal.ModuleFilter.Filter.prototype.buildIndex = function() {
  var self = this;
  var index = new Array();
  $(this.selector).each(function(i) {
    var text = (self.options.childSelector) ? $(self.options.childSelector, this).text() : $(this).text();
    var item = {
      key: i,
      element: $(this),
      text: text.toLowerCase()
    };
    for (var j in self.options.buildIndex) {
      var func = self.options.buildIndex[j];
      item = $.extend(func(self, item), item);
    }
    $(this).data('indexKey', i);
    index.push(item);
    delete item;
  });
  this.index = index;
};

Drupal.ModuleFilter.Filter.prototype.processRules = function(item) {
  var self = this;
  var $item = item.element;
  var rulesResult = true;
  if (self.options.rules.length > 0) {
    for (var i in self.options.rules) {
      var func = self.options.rules[i];
      rulesResult = func(self, item);
      if (rulesResult === false) {
        break;
      }
    }
  }
  if (rulesResult !== false) {
    $item.removeClass('js-hide');
    self.results.push(item);
  }
  return rulesResult;
};

Drupal.ModuleFilter.Filter.prototype.stripe = function() {
  var self = this;
  var flip = { even: 'odd', odd: 'even' };
  var stripe = 'odd';

  $.each(self.index, function(key, item) {
    if (!item.element.hasClass('js-hide')) {
      item.element.removeClass('odd even')
        .addClass(stripe);
      stripe = flip[stripe];
    }
  });
};

$.fn.moduleFilter = function(selector, options) {
  var filterInput = this;
  filterInput.parents('.module-filter-inputs-wrapper').show();
  if (Drupal.settings.moduleFilter.setFocus) {
    filterInput.focus();
  }
  filterInput.data('moduleFilter', new Drupal.ModuleFilter.Filter(this, selector, options));
};

})(jQuery);
;
(function($) {

var lastModuleItem;

Drupal.behaviors.moduleFilterPermissions = {
  attach: function(context) {
    $('.module-filter-inputs-wrapper', context).once('module-filter', function() {
      var filterInput = $('input[name="module_filter[name]"]', context);
      var selector = '#permissions tbody tr';

      // Move location of filter input.
      $('#permissions').parent().prepend(filterInput.parent().parent());

      filterInput.moduleFilter(selector, {
        wrapper: $('#permissions').parent(),
        childSelector: 'td.module',
        buildIndex: [
          function(moduleFilter, item) {
            item.isModule = (item.text != '') ? true : false;
            if (item.isModule) {
              item.children = new Array();
              lastModuleItem = item;
            }
            else {
              item.parent = lastModuleItem;
              lastModuleItem.children.push(item);
            }
            return item;
          }
        ]
      });

      var moduleFilter = filterInput.data('moduleFilter');

      moduleFilter.operators = {
        perm: function(string, moduleFilter, item) {
          if (!item.isModule) {
            if (item.name == undefined) {
              var $name = $('td.permission', item.element).clone();
              $('.description', $name).remove();
              item.name = $name.text().trim().toLowerCase();
            }

            if (item.name.indexOf(string) >= 0) {
              return true;
            }
          }
        }
      };

      moduleFilter.element.bind('moduleFilter:finish', function(e, data) {
        for (var i in moduleFilter.results) {
          if (moduleFilter.results[i].isModule) {
            for (var k in moduleFilter.results[i].children) {
              moduleFilter.results[i].children[k].element.removeClass('js-hide');
            }
          }
          else {
            moduleFilter.results[i].parent.element.removeClass('js-hide');
          }
        }
      });
    });
  }
};

})(jQuery);;
(function ($) {

/**
 * Shows checked and disabled checkboxes for inherited permissions.
 */
Drupal.behaviors.permissions = {
  attach: function (context) {
    var self = this;
    $('table#permissions').once('permissions', function () {
      // On a site with many roles and permissions, this behavior initially has
      // to perform thousands of DOM manipulations to inject checkboxes and hide
      // them. By detaching the table from the DOM, all operations can be
      // performed without triggering internal layout and re-rendering processes
      // in the browser.
      var $table = $(this);
      if ($table.prev().length) {
        var $ancestor = $table.prev(), method = 'after';
      }
      else {
        var $ancestor = $table.parent(), method = 'append';
      }
      $table.detach();

      // Create dummy checkboxes. We use dummy checkboxes instead of reusing
      // the existing checkboxes here because new checkboxes don't alter the
      // submitted form. If we'd automatically check existing checkboxes, the
      // permission table would be polluted with redundant entries. This
      // is deliberate, but desirable when we automatically check them.
      var $dummy = $('<input type="checkbox" class="dummy-checkbox" disabled="disabled" checked="checked" />')
        .attr('title', Drupal.t("This permission is inherited from the authenticated user role."))
        .hide();

      $('input[type=checkbox]', this).not('.rid-2, .rid-1').addClass('real-checkbox').each(function () {
        $dummy.clone().insertAfter(this);
      });

      // Initialize the authenticated user checkbox.
      $('input[type=checkbox].rid-2', this)
        .bind('click.permissions', self.toggle)
        // .triggerHandler() cannot be used here, as it only affects the first
        // element.
        .each(self.toggle);

      // Re-insert the table into the DOM.
      $ancestor[method]($table);
    });
  },

  /**
   * Toggles all dummy checkboxes based on the checkboxes' state.
   *
   * If the "authenticated user" checkbox is checked, the checked and disabled
   * checkboxes are shown, the real checkboxes otherwise.
   */
  toggle: function () {
    var authCheckbox = this, $row = $(this).closest('tr');
    // jQuery performs too many layout calculations for .hide() and .show(),
    // leading to a major page rendering lag on sites with many roles and
    // permissions. Therefore, we toggle visibility directly.
    $row.find('.real-checkbox').each(function () {
      this.style.display = (authCheckbox.checked ? 'none' : '');
    });
    $row.find('.dummy-checkbox').each(function () {
      this.style.display = (authCheckbox.checked ? '' : 'none');
    });
  }
};

})(jQuery);
;
(function fpa_scope($,Drupal,window,document){"use strict";var Fpa=function(context,settings){this.init(context,settings);return this};Fpa.prototype.selector={form:"#user-admin-permissions",table:"#permissions"};Fpa.prototype.init=function(context,settings){this.drupal_html_class_cache={};this.dom={};this.attr=settings.attr;this.filter_timeout=null;this.filter_timeout_time=0;this.module_match="*=";this.filter_selector_cache={"*=":{},"~=":{}};this.selector.table_base_selector=".fpa-table-wrapper tr["+this.attr.module+"]";this.selector.list_counter_selector=".fpa-perm-counter";this.selector.list_base_selector=".fpa-left-section li["+this.attr.module+"]";if(this.select(context)){this.prepare();this.authenticated_role_behavior()}};Fpa.prototype.styles={module_active_style:"{margin-right:-1px; background-color: white; border-right: solid 1px transparent;}"};Fpa.prototype.select=function(context){this.dom.context=$(context);this.dom.form=this.dom.context.find(this.selector.form);if(this.dom.form.length===0){return false}this.dom.container=this.dom.form.find(".fpa-container");this.dom.perm_style=this.dom.container.find(".fpa-perm-styles style").get(0);this.dom.role_style=this.dom.container.find(".fpa-role-styles style").get(0);this.dom.section_left=this.dom.container.find(".fpa-left-section");this.dom.section_right=this.dom.container.find(".fpa-right-section");this.dom.table_wrapper=this.dom.section_right.find(".fpa-table-wrapper");this.dom.table=this.dom.table_wrapper.find(this.selector.table);this.dom.module_list=this.dom.section_left.find("ul");this.dom.filter_form=this.dom.container.find(".fpa-filter-form");this.dom.filter=this.dom.filter_form.find('input[type="text"]');this.dom.role_select=this.dom.filter_form.find("select");this.dom.checked_status=this.dom.filter_form.find('input[type="checkbox"]');return true};Fpa.prototype.drupal_clean_css_identifier=function(str){return str.replace(/[ _\/\[]/g,"-").replace(/\]/g,"").replace(/[^\u002D\u0030-\u0039\u0041-\u005A\u005F\u0061-\u007A\u00A1-\uFFFF]/,"")};Fpa.prototype.drupal_html_class=function(str){if(this.drupal_html_class_cache[str]===undefined){this.drupal_html_class_cache[str]=this.drupal_clean_css_identifier(str.toLowerCase())}return this.drupal_html_class_cache[str]};Fpa.prototype.set_style=function(){if($('<style type="text/css" />').get(0).styleSheet){return function(element,styles){element.styleSheet.cssText=styles}}return function(element,styles){element.innerHTML=styles}}();Fpa.prototype.filter_module=function(e){e.preventDefault();e.stopPropagation();var $this=$(e.currentTarget);this.dom.filter.val([this.dom.filter.val().replace(/(@.*)/,""),$this.attr(this.attr.module)!==""?"@"+$this.find("a[href]").text():""].join(""));this.module_match="~=";this.filter()};Fpa.prototype.build_filter_selectors=function(filter_string){var matches=filter_string.match(/^\s*([^@]*)@?(.*?)\s*$/i);matches.shift();var safe_matches=$.map(matches,$.proxy(this.drupal_html_class,this));this.filter_selector_cache[this.module_match][filter_string]=[safe_matches[0].length>0?"["+this.attr.permission+'*="'+safe_matches[0]+'"]':"",safe_matches[1].length>0?"["+this.attr.module+this.module_match+'"'+safe_matches[1]+'"]':""];return this.filter_selector_cache[this.module_match][filter_string]};Fpa.prototype.get_filter_selectors=function(filter_string){filter_string=filter_string||this.dom.filter.val();return this.filter_selector_cache[this.module_match][filter_string]||this.build_filter_selectors(filter_string)};Fpa.prototype.permission_grid_styles=function(filters){filters=filters||this.get_filter_selectors();var checked_filters=this.build_checked_selectors();var styles=[this.selector.table_base_selector,"{display: none;}"];for(var i=0;i<checked_filters.length;i++){styles=styles.concat([this.selector.table_base_selector,checked_filters[i],filters[0],filters[1],"{display: table-row;}"])}return styles.join("")};Fpa.prototype.counter_styles=function(filters){filters=filters||this.get_filter_selectors();return[this.selector.list_counter_selector,"{display: none;}",this.selector.list_counter_selector,filters[0],"{display: inline;}"].join("")};Fpa.prototype.module_list_styles=function(filters){filters=filters||this.get_filter_selectors();return[this.selector.list_base_selector,filters[1].length>0?filters[1]:"["+this.attr.module+'=""]',this.styles.module_active_style].join("")};Fpa.prototype.filter=function(){var perm=this.dom.filter.val();$.cookie("fpa_filter",perm,{path:"/"});$.cookie("fpa_module_match",this.module_match,{path:"/"});this.save_filters();var filter_selector=this.get_filter_selectors(perm);this.set_style(this.dom.perm_style,[this.permission_grid_styles(filter_selector),this.counter_styles(filter_selector),this.module_list_styles(filter_selector)].join(""))};Fpa.prototype.build_role_selectors=function(roles){roles=roles||this.dom.role_select.val();var selectors=["*"];if($.inArray("*",roles)===-1){selectors=$.map(roles,$.proxy(function(value,index){return"["+this.attr.role+'="'+value+'"]'},this))}return selectors};Fpa.prototype.build_checked_selectors=function(roles){roles=roles||this.dom.role_select.val();var checked_boxes=$.map(this.dom.checked_status,function(element,index){return element.checked?$(element).val():null});var selectors=[""];if($.inArray("*",roles)!==-1){roles=$.map(this.dom.role_select.find("option").not('[value="*"]'),$.proxy(function(element,index){return $(element).attr("value")},this))}if(checked_boxes.length!=this.dom.checked_status.length){selectors=$.map(roles,$.proxy(function(value,index){return $.map(checked_boxes,$.proxy(function(checked_attr,index){return"["+checked_attr+'~="'+value+'"]'},this))},this))}return selectors};Fpa.prototype.filter_roles=function(){this.save_filters();var values=this.dom.role_select.val()||[];var role_style_code=[];$.cookie("fpa_roles",JSON.stringify(values),{path:"/"});if($.inArray("*",values)===-1){role_style_code.push(".fpa-table-wrapper ["+this.attr.role+"] {display: none;}");if(values.length>0){var role_selectors=this.build_role_selectors(values);role_style_code=role_style_code.concat($.map(role_selectors,$.proxy(function(value,index){return".fpa-table-wrapper "+value+" {display: table-cell;}"},this)));role_style_code.push(".fpa-table-wrapper "+role_selectors.pop()+" {border-right: 1px solid #bebfb9;}")}else{role_style_code.push('td[class="permission"] {border-right: 1px solid #bebfb9;}')}}this.set_style(this.dom.role_style,role_style_code.join(""));this.filter()};Fpa.prototype.save_filters=function(){this.dom.filter.get(0).defaultValue=this.dom.filter.val();this.dom.role_select.find("option").each(function(index,element){element.defaultSelected=element.selected});this.dom.checked_status.each(function(index,element){element.defaultChecked=element.checked})};Fpa.prototype.prepare=function(){this.filter_timeout_time=Math.min(this.dom.table.find("tr").length,200);this.dom.form.delegate(".fpa-toggle-container a","click",$.proxy(function fpa_toggle(e){e.preventDefault();var toggle_class=$(e.currentTarget).attr("fpa-toggle-class");this.dom.container.toggleClass(toggle_class).hasClass(toggle_class)},this));this.dom.section_left.delegate("li","click",$.proxy(this.filter_module,this));this.dom.filter.keypress(function fpa_prevent_form_submission(e){if(e.which===13){e.preventDefault();e.stopPropagation()}}).keyup($.proxy(function fpa_filter_keyup(e){if($.inArray(e.which,[13,16,17,18])===-1){window.clearTimeout(this.filter_timeout);this.filter_timeout=window.setTimeout($.proxy(function(){this.dom.table_wrapper.detach().each($.proxy(function(index,element){this.module_match="*=";this.filter()},this)).appendTo(this.dom.section_right)},this),this.filter_timeout_time)}},this));this.dom.form.delegate('a[href*="admin/people/permissions#"]',"click",$.proxy(function fpa_inter_page_links_click(e){e.preventDefault();e.stopPropagation();this.dom.module_list.find("li["+this.attr.module+'~="'+this.drupal_html_class(e.currentTarget.hash.substring(8))+'"]').click();$("body").scrollTop(this.dom.container.position().top)},this));if(window.location.hash.indexOf("module-")===1){this.dom.module_list.find("li["+this.attr.module+'~="'+this.drupal_html_class(window.location.hash.substring(8))+'"]').click()}this.dom.form.bind("reset",$.proxy(function fpa_form_reset(e){window.setTimeout($.proxy(function fpa_fix_authenticated_behavior(){this.dom.table_wrapper.detach().each($.proxy(function(index,element){$(element).find('input[type="checkbox"].rid-2').each(this.dummy_checkbox_behavior)},this)).appendTo(this.dom.section_right)},this),0)},this));this.dom.section_right.delegate("th["+this.attr.role+'] input[type="checkbox"].fpa-checkboxes-toggle',"change",$.proxy(function fpa_role_permissions_toggle(e){var $this=$(e.currentTarget);var filters=this.get_filter_selectors(this.dom.filter.val());this.dom.table_wrapper.detach().each($.proxy(function(index,element){var rid=$this.closest("["+this.attr.role+"]").attr(this.attr.role);$(element).find(["tr"+filters.join(""),"td.checkbox["+this.attr.role+'="'+rid+'"]','input[type="checkbox"][name]'].join(" ")).attr("checked",$this.attr("checked")).filter(".rid-2").each(this.dummy_checkbox_behavior)},this)).appendTo(this.dom.section_right)},this));this.dom.section_right.delegate('td.permission input[type="checkbox"].fpa-checkboxes-toggle',"change",$.proxy(function fpa_role_permissions_toggle(e){var $row=$(e.currentTarget).closest("tr");$row.prev("tr").after($row.detach().each($.proxy(function(index,element){$(element).find("td.checkbox").filter(this.build_role_selectors().join(",")).find('input[type="checkbox"][name]').attr("checked",e.currentTarget.checked).filter(".rid-2").each(this.dummy_checkbox_behavior)},this)))},this));this.dom.section_right.delegate(".fpa-clear-search","click",$.proxy(function(e){this.dom.filter.val("");this.filter()},this));this.dom.role_select.bind("change blur",$.proxy(this.filter_roles,this));this.dom.checked_status.bind("change",$.proxy(function(e){this.save_filters();this.filter()},this));this.dom.table.delegate("tr["+this.attr.system_name+"]","click",$.proxy(function(e){var $target=$(e.target);if($target.is("tr["+this.attr.system_name+"]")){window.prompt("You can grab the system name here",$target.attr(this.attr.system_name))}},this));window.setTimeout($.proxy(function fpa_filter_focus(){this.dom.filter.focus()},this),0)};Fpa.prototype.dummy_checkbox_behavior=function(){$(this).closest("tr").toggleClass("fpa-authenticated-role-behavior",this.checked)};Fpa.prototype.authenticated_role_behavior=function(){this.dom.table_wrapper.delegate("input[type=checkbox].rid-2","mousedown",function(e){$(e.currentTarget).unbind("click.permissions")}).delegate("input[type=checkbox].rid-2","change.fpa_authenticated_role",this.dummy_checkbox_behavior)};Drupal.behaviors.fpa={attach:function(context,settings){if(document.documentElement.ontouchstart!==undefined){$(document.body).addClass("fpa-mobile")}$(window).bind("scroll",function fpa_fix_tableheader(e){$(e.currentTarget).triggerHandler("resize.drupal-tableheader")});new Fpa(context,settings.fpa)}};Drupal.behaviors.permissions.attach=$.noop})(jQuery,Drupal,window,document);;
