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
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
/**
 * @file
 * Implement a simple, clickable dropbutton menu.
 *
 * See dropbutton.theme.inc for primary documentation.
 *
 * The javascript relies on four classes:
 * - The dropbutton must be fully contained in a div with the class
 *   ctools-dropbutton. It must also contain the class ctools-no-js
 *   which will be immediately removed by the javascript; this allows for
 *   graceful degradation.
 * - The trigger that opens the dropbutton must be an a tag wit hthe class
 *   ctools-dropbutton-link. The href should just be '#' as this will never
 *   be allowed to complete.
 * - The part of the dropbutton that will appear when the link is clicked must
 *   be a div with class ctools-dropbutton-container.
 * - Finally, ctools-dropbutton-hover will be placed on any link that is being
 *   hovered over, so that the browser can restyle the links.
 *
 * This tool isn't meant to replace click-tips or anything, it is specifically
 * meant to work well presenting menus.
 */

(function ($) {
  Drupal.behaviors.CToolsDropbutton = {
    attach: function() {
      // Process buttons. All dropbuttons are buttons.
      $('.ctools-button')
        .once('ctools-button')
        .removeClass('ctools-no-js');

      // Process dropbuttons. Not all buttons are dropbuttons.
      $('.ctools-dropbutton').once('ctools-dropbutton', function() {
        var $dropbutton = $(this);
        var $button = $('.ctools-content', $dropbutton);
        var $secondaryActions = $('li', $button).not(':first');
        var $twisty = $(".ctools-link", $dropbutton);
        var open = false;
        var hovering = false;
        var timerID = 0;

        var toggle = function(close) {
          // if it's open or we're told to close it, close it.
          if (open || close) {
            // If we're just toggling it, close it immediately.
            if (!close) {
              open = false;
              $secondaryActions.slideUp(100);
              $dropbutton.removeClass('open');
            }
            else {
              // If we were told to close it, wait half a second to make
              // sure that's what the user wanted.
              // Clear any previous timer we were using.
              if (timerID) {
                clearTimeout(timerID);
              }
              timerID = setTimeout(function() {
                if (!hovering) {
                  open = false;
                  $secondaryActions.slideUp(100);
                  $dropbutton.removeClass('open');
                }}, 500);
            }
          }
          else {
            // open it.
            open = true;
            $secondaryActions.animate({height: "show", opacity: "show"}, 100);
            $dropbutton.addClass('open');
          }
        }
        // Hide the secondary actions initially.
        $secondaryActions.hide();

        $twisty.click(function() {
            toggle();
            return false;
          });

        $dropbutton.hover(
          function() {
            hovering = true;
          }, // hover in
          function() { // hover out
            hovering = false;
            toggle(true);
            return false;
          }
        );
      });
    }
  }
})(jQuery);
;
(function($){
/**
 * To make a form auto submit, all you have to do is 3 things:
 *
 * ctools_add_js('auto-submit');
 *
 * On gadgets you want to auto-submit when changed, add the ctools-auto-submit
 * class. With FAPI, add:
 * @code
 *  '#attributes' => array('class' => array('ctools-auto-submit')),
 * @endcode
 *
 * If you want to have auto-submit for every form element,
 * add the ctools-auto-submit-full-form to the form. With FAPI, add:
 * @code
 *   '#attributes' => array('class' => array('ctools-auto-submit-full-form')),
 * @endcode
 *
 * If you want to exclude a field from the ctool-auto-submit-full-form auto submission,
 * add the class ctools-auto-submit-exclude to the form element. With FAPI, add:
 * @code
 *   '#attributes' => array('class' => array('ctools-auto-submit-exclude')),
 * @endcode
 *
 * Finally, you have to identify which button you want clicked for autosubmit.
 * The behavior of this button will be honored if it's ajaxy or not:
 * @code
 *  '#attributes' => array('class' => array('ctools-use-ajax', 'ctools-auto-submit-click')),
 * @endcode
 *
 * Currently only 'select', 'radio', 'checkbox' and 'textfield' types are supported. We probably
 * could use additional support for HTML5 input types.
 */

Drupal.behaviors.CToolsAutoSubmit = {
  attach: function(context) {
    // 'this' references the form element
    function triggerSubmit (e) {
      var $this = $(this);
      if (!$this.hasClass('ctools-ajaxing')) {
        $this.find('.ctools-auto-submit-click').click();
      }
    }

    // the change event bubbles so we only need to bind it to the outer form
    $('form.ctools-auto-submit-full-form', context)
      .add('.ctools-auto-submit', context)
      .filter('form, select, input:not(:text, :submit)')
      .once('ctools-auto-submit')
      .change(function (e) {
        // don't trigger on text change for full-form
        if ($(e.target).is(':not(:text, :submit, .ctools-auto-submit-exclude)')) {
          triggerSubmit.call(e.target.form);
        }
      });

    // e.keyCode: key
    var discardKeyCode = [
      16, // shift
      17, // ctrl
      18, // alt
      20, // caps lock
      33, // page up
      34, // page down
      35, // end
      36, // home
      37, // left arrow
      38, // up arrow
      39, // right arrow
      40, // down arrow
       9, // tab
      13, // enter
      27  // esc
    ];
    // Don't wait for change event on textfields
    $('.ctools-auto-submit-full-form input:text, input:text.ctools-auto-submit', context)
      .filter(':not(.ctools-auto-submit-exclude)')
      .once('ctools-auto-submit', function () {
        // each textinput element has his own timeout
        var timeoutID = 0;
        $(this)
          .bind('keydown keyup', function (e) {
            if ($.inArray(e.keyCode, discardKeyCode) === -1) {
              timeoutID && clearTimeout(timeoutID);
            }
          })
          .keyup(function(e) {
            if ($.inArray(e.keyCode, discardKeyCode) === -1) {
              timeoutID = setTimeout($.proxy(triggerSubmit, this.form), 500);
            }
          })
          .bind('change', function (e) {
            if ($.inArray(e.keyCode, discardKeyCode) === -1) {
              timeoutID = setTimeout($.proxy(triggerSubmit, this.form), 500);
            }
          });
      });
  }
}
})(jQuery);
;
/**
 * @file
 * Some basic behaviors and utility functions for Views.
 */
(function ($) {

Drupal.Views = {};

/**
 * jQuery UI tabs, Views integration component
 */
Drupal.behaviors.viewsTabs = {
  attach: function (context) {
    if ($.viewsUi && $.viewsUi.tabs) {
      $('#views-tabset').once('views-processed').viewsTabs({
        selectedClass: 'active'
      });
    }

    $('a.views-remove-link').once('views-processed').click(function(event) {
      var id = $(this).attr('id').replace('views-remove-link-', '');
      $('#views-row-' + id).hide();
      $('#views-removed-' + id).attr('checked', true);
      event.preventDefault();
   });
  /**
    * Here is to handle display deletion
    * (checking in the hidden checkbox and hiding out the row)
    */
  $('a.display-remove-link')
    .addClass('display-processed')
    .click(function() {
      var id = $(this).attr('id').replace('display-remove-link-', '');
      $('#display-row-' + id).hide();
      $('#display-removed-' + id).attr('checked', true);
      return false;
  });
  }
};

/**
 * Helper function to parse a querystring.
 */
Drupal.Views.parseQueryString = function (query) {
  var args = {};
  var pos = query.indexOf('?');
  if (pos != -1) {
    query = query.substring(pos + 1);
  }
  var pairs = query.split('&');
  for(var i in pairs) {
    if (typeof(pairs[i]) == 'string') {
      var pair = pairs[i].split('=');
      // Ignore the 'q' path argument, if present.
      if (pair[0] != 'q' && pair[1]) {
        args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
      }
    }
  }
  return args;
};

/**
 * Helper function to return a view's arguments based on a path.
 */
Drupal.Views.parseViewArgs = function (href, viewPath) {
  var returnObj = {};
  var path = Drupal.Views.getPath(href);
  // Ensure we have a correct path.
  if (viewPath && path.substring(0, viewPath.length + 1) == viewPath + '/') {
    var args = decodeURIComponent(path.substring(viewPath.length + 1, path.length));
    returnObj.view_args = args;
    returnObj.view_path = path;
  }
  return returnObj;
};

/**
 * Strip off the protocol plus domain from an href.
 */
Drupal.Views.pathPortion = function (href) {
  // Remove e.g. http://example.com if present.
  var protocol = window.location.protocol;
  if (href.substring(0, protocol.length) == protocol) {
    // 2 is the length of the '//' that normally follows the protocol
    href = href.substring(href.indexOf('/', protocol.length + 2));
  }
  return href;
};

/**
 * Return the Drupal path portion of an href.
 */
Drupal.Views.getPath = function (href) {
  href = Drupal.Views.pathPortion(href);
  href = href.substring(Drupal.settings.basePath.length, href.length);
  // 3 is the length of the '?q=' added to the url without clean urls.
  if (href.substring(0, 3) == '?q=') {
    href = href.substring(3, href.length);
  }
  var chars = ['#', '?', '&'];
  for (i in chars) {
    if (href.indexOf(chars[i]) > -1) {
      href = href.substr(0, href.indexOf(chars[i]));
    }
  }
  return href;
};

})(jQuery);
;
/**
 * @file
 * Javascript related to the main view list.
 */
(function ($) {

Drupal.behaviors.viewsUIList = {
  attach: function (context) {
    $('#ctools-export-ui-list-items thead a').once('views-ajax-processed').each(function() {
      $(this).click(function() {
        var query = $.deparam.querystring(this.href);
        $('#ctools-export-ui-list-form select[name=order]').val(query['order']);
        $('#ctools-export-ui-list-form select[name=sort]').val(query['sort']);
        $('#ctools-export-ui-list-form input.ctools-auto-submit-click').trigger('click');
        return false;
      });
    });
  }
};

})(jQuery);
;
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
