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
 * Provides JavaScript additions to the managed file field type.
 *
 * This file provides progress bar support (if available), popup windows for
 * file previews, and disabling of other file fields during Ajax uploads (which
 * prevents separate file fields from accidentally uploading files).
 */

(function ($) {

/**
 * Attach behaviors to managed file element upload fields.
 */
Drupal.behaviors.fileValidateAutoAttach = {
  attach: function (context, settings) {
    if (settings.file && settings.file.elements) {
      $.each(settings.file.elements, function(selector) {
        var extensions = settings.file.elements[selector];
        $(selector, context).bind('change', {extensions: extensions}, Drupal.file.validateExtension);
      });
    }
  },
  detach: function (context, settings) {
    if (settings.file && settings.file.elements) {
      $.each(settings.file.elements, function(selector) {
        $(selector, context).unbind('change', Drupal.file.validateExtension);
      });
    }
  }
};

/**
 * Attach behaviors to the file upload and remove buttons.
 */
Drupal.behaviors.fileButtons = {
  attach: function (context) {
    $('input.form-submit', context).bind('mousedown', Drupal.file.disableFields);
    $('div.form-managed-file input.form-submit', context).bind('mousedown', Drupal.file.progressBar);
  },
  detach: function (context) {
    $('input.form-submit', context).unbind('mousedown', Drupal.file.disableFields);
    $('div.form-managed-file input.form-submit', context).unbind('mousedown', Drupal.file.progressBar);
  }
};

/**
 * Attach behaviors to links within managed file elements.
 */
Drupal.behaviors.filePreviewLinks = {
  attach: function (context) {
    $('div.form-managed-file .file a, .file-widget .file a', context).bind('click',Drupal.file.openInNewWindow);
  },
  detach: function (context){
    $('div.form-managed-file .file a, .file-widget .file a', context).unbind('click', Drupal.file.openInNewWindow);
  }
};

/**
 * File upload utility functions.
 */
Drupal.file = Drupal.file || {
  /**
   * Client-side file input validation of file extensions.
   */
  validateExtension: function (event) {
    // Remove any previous errors.
    $('.file-upload-js-error').remove();

    // Add client side validation for the input[type=file].
    var extensionPattern = event.data.extensions.replace(/,\s*/g, '|');
    if (extensionPattern.length > 1 && this.value.length > 0) {
      var acceptableMatch = new RegExp('\\.(' + extensionPattern + ')$', 'gi');
      if (!acceptableMatch.test(this.value)) {
        var error = Drupal.t("The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.", {
          // According to the specifications of HTML5, a file upload control
          // should not reveal the real local path to the file that a user
          // has selected. Some web browsers implement this restriction by
          // replacing the local path with "C:\fakepath\", which can cause
          // confusion by leaving the user thinking perhaps Drupal could not
          // find the file because it messed up the file path. To avoid this
          // confusion, therefore, we strip out the bogus fakepath string.
          '%filename': this.value.replace('C:\\fakepath\\', ''),
          '%extensions': extensionPattern.replace(/\|/g, ', ')
        });
        $(this).closest('div.form-managed-file').prepend('<div class="messages error file-upload-js-error" aria-live="polite">' + error + '</div>');
        this.value = '';
        return false;
      }
    }
  },
  /**
   * Prevent file uploads when using buttons not intended to upload.
   */
  disableFields: function (event){
    var clickedButton = this;

    // Only disable upload fields for Ajax buttons.
    if (!$(clickedButton).hasClass('ajax-processed')) {
      return;
    }

    // Check if we're working with an "Upload" button.
    var $enabledFields = [];
    if ($(this).closest('div.form-managed-file').length > 0) {
      $enabledFields = $(this).closest('div.form-managed-file').find('input.form-file');
    }

    // Temporarily disable upload fields other than the one we're currently
    // working with. Filter out fields that are already disabled so that they
    // do not get enabled when we re-enable these fields at the end of behavior
    // processing. Re-enable in a setTimeout set to a relatively short amount
    // of time (1 second). All the other mousedown handlers (like Drupal's Ajax
    // behaviors) are excuted before any timeout functions are called, so we
    // don't have to worry about the fields being re-enabled too soon.
    // @todo If the previous sentence is true, why not set the timeout to 0?
    var $fieldsToTemporarilyDisable = $('div.form-managed-file input.form-file').not($enabledFields).not(':disabled');
    $fieldsToTemporarilyDisable.attr('disabled', 'disabled');
    setTimeout(function (){
      $fieldsToTemporarilyDisable.attr('disabled', false);
    }, 1000);
  },
  /**
   * Add progress bar support if possible.
   */
  progressBar: function (event) {
    var clickedButton = this;
    var $progressId = $(clickedButton).closest('div.form-managed-file').find('input.file-progress');
    if ($progressId.length) {
      var originalName = $progressId.attr('name');

      // Replace the name with the required identifier.
      $progressId.attr('name', originalName.match(/APC_UPLOAD_PROGRESS|UPLOAD_IDENTIFIER/)[0]);

      // Restore the original name after the upload begins.
      setTimeout(function () {
        $progressId.attr('name', originalName);
      }, 1000);
    }
    // Show the progress bar if the upload takes longer than half a second.
    setTimeout(function () {
      $(clickedButton).closest('div.form-managed-file').find('div.ajax-progress-bar').slideDown();
    }, 500);
  },
  /**
   * Open links to files within forms in a new window.
   */
  openInNewWindow: function (event) {
    $(this).attr('target', '_blank');
    window.open(this.href, 'filePreview', 'toolbar=0,scrollbars=1,location=1,statusbar=1,menubar=0,resizable=1,width=500,height=550');
    return false;
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
;

(function ($) {

/**
 * Auto-hide summary textarea if empty and show hide and unhide links.
 */
Drupal.behaviors.textSummary = {
  attach: function (context, settings) {
    $('.text-summary', context).once('text-summary', function () {
      var $widget = $(this).closest('div.field-type-text-with-summary');
      var $summaries = $widget.find('div.text-summary-wrapper');

      $summaries.once('text-summary-wrapper').each(function(index) {
        var $summary = $(this);
        var $summaryLabel = $summary.find('label').first();
        var $full = $widget.find('.text-full').eq(index).closest('.form-item');
        var $fullLabel = $full.find('label').first();

        // Create a placeholder label when the field cardinality is
        // unlimited or greater than 1.
        if ($fullLabel.length == 0) {
          $fullLabel = $('<label></label>').prependTo($full);
        }

        // Setup the edit/hide summary link.
        var $link = $('<span class="field-edit-link">(<a class="link-edit-summary" href="#">' + Drupal.t('Hide summary') + '</a>)</span>');
        var $a = $link.find('a');
        var toggleClick = true;
        $link.bind('click', function (e) {
          if (toggleClick) {
            $summary.hide();
            $a.html(Drupal.t('Edit summary'));
            $link.appendTo($fullLabel);
          }
          else {
            $summary.show();
            $a.html(Drupal.t('Hide summary'));
            $link.appendTo($summaryLabel);
          }
          toggleClick = !toggleClick;
          return false;
        }).appendTo($summaryLabel);

        // If no summary is set, hide the summary field.
        if ($(this).find('.text-summary').val() == '') {
          $link.click();
        }
      });
    });
  }
};

})(jQuery);
;
(function ($) {

/**
 * Automatically display the guidelines of the selected text format.
 */
Drupal.behaviors.filterGuidelines = {
  attach: function (context) {
    $('.filter-guidelines', context).once('filter-guidelines')
      .find(':header').hide()
      .closest('.filter-wrapper').find('select.filter-list')
      .bind('change', function () {
        $(this).closest('.filter-wrapper')
          .find('.filter-guidelines-item').hide()
          .siblings('.filter-guidelines-' + this.value).show();
      })
      .change();
  }
};

})(jQuery);
;
(function ($) {

/**
 * Toggle the visibility of a fieldset using smooth animations.
 */
Drupal.toggleFieldset = function (fieldset) {
  var $fieldset = $(fieldset);
  if ($fieldset.is('.collapsed')) {
    var $content = $('> .fieldset-wrapper', fieldset).hide();
    $fieldset
      .removeClass('collapsed')
      .trigger({ type: 'collapsed', value: false })
      .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Hide'));
    $content.slideDown({
      duration: 'fast',
      easing: 'linear',
      complete: function () {
        Drupal.collapseScrollIntoView(fieldset);
        fieldset.animating = false;
      },
      step: function () {
        // Scroll the fieldset into view.
        Drupal.collapseScrollIntoView(fieldset);
      }
    });
  }
  else {
    $fieldset.trigger({ type: 'collapsed', value: true });
    $('> .fieldset-wrapper', fieldset).slideUp('fast', function () {
      $fieldset
        .addClass('collapsed')
        .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Show'));
      fieldset.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = document.documentElement.clientHeight || document.body.clientHeight || 0;
  var offset = document.documentElement.scrollTop || document.body.scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    }
    else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = {
  attach: function (context, settings) {
    $('fieldset.collapsible', context).once('collapse', function () {
      var $fieldset = $(this);
      // Expand fieldset if there are errors inside, or if it contains an
      // element that is targeted by the URI fragment identifier.
      var anchor = location.hash && location.hash != '#' ? ', ' + location.hash : '';
      if ($fieldset.find('.error' + anchor).length) {
        $fieldset.removeClass('collapsed');
      }

      var summary = $('<span class="summary"></span>');
      $fieldset.
        bind('summaryUpdated', function () {
          var text = $.trim($fieldset.drupalGetSummary());
          summary.html(text ? ' (' + text + ')' : '');
        })
        .trigger('summaryUpdated');

      // Turn the legend into a clickable link, but retain span.fieldset-legend
      // for CSS positioning.
      var $legend = $('> legend .fieldset-legend', this);

      $('<span class="fieldset-legend-prefix element-invisible"></span>')
        .append($fieldset.hasClass('collapsed') ? Drupal.t('Show') : Drupal.t('Hide'))
        .prependTo($legend)
        .after(' ');

      // .wrapInner() does not retain bound events.
      var $link = $('<a class="fieldset-title" href="#"></a>')
        .prepend($legend.contents())
        .appendTo($legend)
        .click(function () {
          var fieldset = $fieldset.get(0);
          // Don't animate multiple times.
          if (!fieldset.animating) {
            fieldset.animating = true;
            Drupal.toggleFieldset(fieldset);
          }
          return false;
        });

      $legend.append(summary);
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.menuFieldsetSummaries = {
  attach: function (context) {
    $('fieldset.menu-link-form', context).drupalSetSummary(function (context) {
      if ($('.form-item-menu-enabled input', context).is(':checked')) {
        return Drupal.checkPlain($('.form-item-menu-link-title input', context).val());
      }
      else {
        return Drupal.t('Not in menu');
      }
    });
  }
};

/**
 * Automatically fill in a menu link title, if possible.
 */
Drupal.behaviors.menuLinkAutomaticTitle = {
  attach: function (context) {
    $('fieldset.menu-link-form', context).each(function () {
      // Try to find menu settings widget elements as well as a 'title' field in
      // the form, but play nicely with user permissions and form alterations.
      var $checkbox = $('.form-item-menu-enabled input', this);
      var $link_title = $('.form-item-menu-link-title input', context);
      var $title = $(this).closest('form').find('.form-item-title input');
      // Bail out if we do not have all required fields.
      if (!($checkbox.length && $link_title.length && $title.length)) {
        return;
      }
      // If there is a link title already, mark it as overridden. The user expects
      // that toggling the checkbox twice will take over the node's title.
      if ($checkbox.is(':checked') && $link_title.val().length) {
        $link_title.data('menuLinkAutomaticTitleOveridden', true);
      }
      // Whenever the value is changed manually, disable this behavior.
      $link_title.keyup(function () {
        $link_title.data('menuLinkAutomaticTitleOveridden', true);
      });
      // Global trigger on checkbox (do not fill-in a value when disabled).
      $checkbox.change(function () {
        if ($checkbox.is(':checked')) {
          if (!$link_title.data('menuLinkAutomaticTitleOveridden')) {
            $link_title.val($title.val());
          }
        }
        else {
          $link_title.val('');
          $link_title.removeData('menuLinkAutomaticTitleOveridden');
        }
        $checkbox.closest('fieldset.vertical-tabs-pane').trigger('summaryUpdated');
        $checkbox.trigger('formUpdated');
      });
      // Take over any title change.
      $title.keyup(function () {
        if (!$link_title.data('menuLinkAutomaticTitleOveridden') && $checkbox.is(':checked')) {
          $link_title.val($title.val());
          $link_title.val($title.val()).trigger('formUpdated');
        }
      });
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.pathFieldsetSummaries = {
  attach: function (context) {
    $('fieldset.path-form', context).drupalSetSummary(function (context) {
      var path = $('.form-item-path-alias input').val();
      var automatic = $('.form-item-path-pathauto input').attr('checked');

      if (automatic) {
        return Drupal.t('Automatic alias');
      }
      if (path) {
        return Drupal.t('Alias: @alias', { '@alias': path });
      }
      else {
        return Drupal.t('No alias');
      }
    });
  }
};

})(jQuery);
;

(function ($) {

Drupal.behaviors.xmlsitemapFieldsetSummaries = {
  attach: function (context) {
    $('fieldset#edit-xmlsitemap', context).drupalSetSummary(function (context) {
      var vals = [];

      // Inclusion select field.
      var status = $('#edit-xmlsitemap-status option:selected').text();
      vals.push(Drupal.t('Inclusion: @value', { '@value': status }));

      // Priority select field.
      var priority = $('#edit-xmlsitemap-priority option:selected').text();
      vals.push(Drupal.t('Priority: @value', { '@value': priority }));

      return vals.join('<br />');
    });
  }
};

})(jQuery);
;

(function ($) {

Drupal.behaviors.commentFieldsetSummaries = {
  attach: function (context) {
    $('fieldset.comment-node-settings-form', context).drupalSetSummary(function (context) {
      return Drupal.checkPlain($('.form-item-comment input:checked', context).next('label').text());
    });

    // Provide the summary for the node type form.
    $('fieldset.comment-node-type-settings-form', context).drupalSetSummary(function(context) {
      var vals = [];

      // Default comment setting.
      vals.push($(".form-item-comment select option:selected", context).text());

      // Threading.
      var threading = $(".form-item-comment-default-mode input:checked", context).next('label').text();
      if (threading) {
        vals.push(threading);
      }

      // Comments per page.
      var number = $(".form-item-comment-default-per-page select option:selected", context).val();
      vals.push(Drupal.t('@number comments per page', {'@number': number}));

      return Drupal.checkPlain(vals.join(', '));
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

(function ($) {

Drupal.behaviors.redirectFieldsetSummaries = {
  attach: function (context) {
    $('fieldset.redirect-list', context).drupalSetSummary(function (context) {
      if ($('table.redirect-list tbody td.empty', context).size()) {
        return Drupal.t('No redirects');
      }
      else {
        var redirects = $('table.redirect-list tbody tr').size();
        return Drupal.formatPlural(redirects, '1 redirect', '@count redirects');
      }
    });
  }
};

})(jQuery);
;

(function ($) {

Drupal.behaviors.pageTitleFieldsetSummaries = {
  attach: function (context) {
    $('fieldset#edit-page-title', context).drupalSetSummary(function (context) {
      var pt = $('input', context).val();

      return pt ?
        Drupal.t('Page Title: @pt', { '@pt': pt }) :
        Drupal.t('No Page Title');
    });
  }
};


Drupal.behaviors.pageTitleCounter = {
  attach : function(context) {
    $('fieldset#edit-page-title', context).each(function() {
      function getLength(element) { return $(element).val().length; }

      var wrapper = this;

      var inputBox = $('input[name=page_title]', wrapper);

      var valueBox = $('div.description', wrapper)
                      .append('<br/><span class="counter">Characters Entered: <span class="value">0</span></span>')
                      .find('.value')
                      .text(getLength(inputBox));

      $('input[name=page_title]', wrapper).keyup(function(e) { $(valueBox).text(getLength(inputBox)); });
    });
  }

}


})(jQuery);

;

(function ($) {

Drupal.behaviors.metatagFieldsetSummaries = {
  attach: function (context) {
    $('fieldset.metatags-form', context).drupalSetSummary(function (context) {
      var vals = [];
      $("input[type='text'], select, textarea", context).each(function() {
        var default_name = $(this).attr('name').replace(/\[value\]/, '[default]');
        var default_value = $("input[type='hidden'][name='" + default_name + "']", context);
        if (default_value.length && default_value.val() == $(this).val()) {
          // Meta tag has a default value and form value matches default value.
          return true;
        }
        else if (!default_value.length && !$(this).val().length) {
          // Meta tag has no default value and form value is empty.
          return true;
        }
        var label = $("label[for='" + $(this).attr('id') + "']").text();
        vals.push(Drupal.t('@label: @value', {
          '@label': $.trim(label),
          '@value': Drupal.truncate($(this).val(), 25) || Drupal.t('None')
        }));
      });
      if (vals.length === 0) {
        return Drupal.t('Using defaults');
      }
      else {
        return vals.join('<br />');
      }
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.truncate = function (str, limit) {
  if (str.length > limit) {
    return str.substr(0, limit) + '...';
  }
  else {
    return str;
  }
};

})(jQuery);
;
(function ($) {

/**
 * Attaches the autocomplete behavior to all required fields.
 */
Drupal.behaviors.autocomplete = {
  attach: function (context, settings) {
    var acdb = [];
    $('input.autocomplete', context).once('autocomplete', function () {
      var uri = this.value;
      if (!acdb[uri]) {
        acdb[uri] = new Drupal.ACDB(uri);
      }
      var $input = $('#' + this.id.substr(0, this.id.length - 13))
        .attr('autocomplete', 'OFF')
        .attr('aria-autocomplete', 'list');
      $($input[0].form).submit(Drupal.autocompleteSubmit);
      $input.parent()
        .attr('role', 'application')
        .append($('<span class="element-invisible" aria-live="assertive"></span>')
          .attr('id', $input.attr('id') + '-autocomplete-aria-live')
        );
      new Drupal.jsAC($input, acdb[uri]);
    });
  }
};

/**
 * Prevents the form from submitting if the suggestions popup is open
 * and closes the suggestions popup when doing so.
 */
Drupal.autocompleteSubmit = function () {
  return $('#autocomplete').each(function () {
    this.owner.hidePopup();
  }).length == 0;
};

/**
 * An AutoComplete object.
 */
Drupal.jsAC = function ($input, db) {
  var ac = this;
  this.input = $input[0];
  this.ariaLive = $('#' + this.input.id + '-autocomplete-aria-live');
  this.db = db;

  $input
    .keydown(function (event) { return ac.onkeydown(this, event); })
    .keyup(function (event) { ac.onkeyup(this, event); })
    .blur(function () { ac.hidePopup(); ac.db.cancel(); });

};

/**
 * Handler for the "keydown" event.
 */
Drupal.jsAC.prototype.onkeydown = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 40: // down arrow.
      this.selectDown();
      return false;
    case 38: // up arrow.
      this.selectUp();
      return false;
    default: // All other keys.
      return true;
  }
};

/**
 * Handler for the "keyup" event.
 */
Drupal.jsAC.prototype.onkeyup = function (input, e) {
  if (!e) {
    e = window.event;
  }
  switch (e.keyCode) {
    case 16: // Shift.
    case 17: // Ctrl.
    case 18: // Alt.
    case 20: // Caps lock.
    case 33: // Page up.
    case 34: // Page down.
    case 35: // End.
    case 36: // Home.
    case 37: // Left arrow.
    case 38: // Up arrow.
    case 39: // Right arrow.
    case 40: // Down arrow.
      return true;

    case 9:  // Tab.
    case 13: // Enter.
    case 27: // Esc.
      this.hidePopup(e.keyCode);
      return true;

    default: // All other keys.
      if (input.value.length > 0 && !input.readOnly) {
        this.populatePopup();
      }
      else {
        this.hidePopup(e.keyCode);
      }
      return true;
  }
};

/**
 * Puts the currently highlighted suggestion into the autocomplete field.
 */
Drupal.jsAC.prototype.select = function (node) {
  this.input.value = $(node).data('autocompleteValue');
  $(this.input).trigger('autocompleteSelect', [node]);
};

/**
 * Highlights the next suggestion.
 */
Drupal.jsAC.prototype.selectDown = function () {
  if (this.selected && this.selected.nextSibling) {
    this.highlight(this.selected.nextSibling);
  }
  else if (this.popup) {
    var lis = $('li', this.popup);
    if (lis.length > 0) {
      this.highlight(lis.get(0));
    }
  }
};

/**
 * Highlights the previous suggestion.
 */
Drupal.jsAC.prototype.selectUp = function () {
  if (this.selected && this.selected.previousSibling) {
    this.highlight(this.selected.previousSibling);
  }
};

/**
 * Highlights a suggestion.
 */
Drupal.jsAC.prototype.highlight = function (node) {
  if (this.selected) {
    $(this.selected).removeClass('selected');
  }
  $(node).addClass('selected');
  this.selected = node;
  $(this.ariaLive).html($(this.selected).html());
};

/**
 * Unhighlights a suggestion.
 */
Drupal.jsAC.prototype.unhighlight = function (node) {
  $(node).removeClass('selected');
  this.selected = false;
  $(this.ariaLive).empty();
};

/**
 * Hides the autocomplete suggestions.
 */
Drupal.jsAC.prototype.hidePopup = function (keycode) {
  // Select item if the right key or mousebutton was pressed.
  if (this.selected && ((keycode && keycode != 46 && keycode != 8 && keycode != 27) || !keycode)) {
    this.select(this.selected);
  }
  // Hide popup.
  var popup = this.popup;
  if (popup) {
    this.popup = null;
    $(popup).fadeOut('fast', function () { $(popup).remove(); });
  }
  this.selected = false;
  $(this.ariaLive).empty();
};

/**
 * Positions the suggestions popup and starts a search.
 */
Drupal.jsAC.prototype.populatePopup = function () {
  var $input = $(this.input);
  var position = $input.position();
  // Show popup.
  if (this.popup) {
    $(this.popup).remove();
  }
  this.selected = false;
  this.popup = $('<div id="autocomplete"></div>')[0];
  this.popup.owner = this;
  $(this.popup).css({
    top: parseInt(position.top + this.input.offsetHeight, 10) + 'px',
    left: parseInt(position.left, 10) + 'px',
    width: $input.innerWidth() + 'px',
    display: 'none'
  });
  $input.before(this.popup);

  // Do search.
  this.db.owner = this;
  this.db.search(this.input.value);
};

/**
 * Fills the suggestion popup with any matches received.
 */
Drupal.jsAC.prototype.found = function (matches) {
  // If no value in the textfield, do not show the popup.
  if (!this.input.value.length) {
    return false;
  }

  // Prepare matches.
  var ul = $('<ul></ul>');
  var ac = this;
  for (key in matches) {
    $('<li></li>')
      .html($('<div></div>').html(matches[key]))
      .mousedown(function () { ac.hidePopup(this); })
      .mouseover(function () { ac.highlight(this); })
      .mouseout(function () { ac.unhighlight(this); })
      .data('autocompleteValue', key)
      .appendTo(ul);
  }

  // Show popup with matches, if any.
  if (this.popup) {
    if (ul.children().length) {
      $(this.popup).empty().append(ul).show();
      $(this.ariaLive).html(Drupal.t('Autocomplete popup'));
    }
    else {
      $(this.popup).css({ visibility: 'hidden' });
      this.hidePopup();
    }
  }
};

Drupal.jsAC.prototype.setStatus = function (status) {
  switch (status) {
    case 'begin':
      $(this.input).addClass('throbbing');
      $(this.ariaLive).html(Drupal.t('Searching for matches...'));
      break;
    case 'cancel':
    case 'error':
    case 'found':
      $(this.input).removeClass('throbbing');
      break;
  }
};

/**
 * An AutoComplete DataBase object.
 */
Drupal.ACDB = function (uri) {
  this.uri = uri;
  this.delay = 300;
  this.cache = {};
};

/**
 * Performs a cached and delayed search.
 */
Drupal.ACDB.prototype.search = function (searchString) {
  var db = this;
  this.searchString = searchString;

  // See if this string needs to be searched for anyway. The pattern ../ is
  // stripped since it may be misinterpreted by the browser.
  searchString = searchString.replace(/^\s+|\.{2,}\/|\s+$/g, '');
  // Skip empty search strings, or search strings ending with a comma, since
  // that is the separator between search terms.
  if (searchString.length <= 0 ||
    searchString.charAt(searchString.length - 1) == ',') {
    return;
  }

  // See if this key has been searched for before.
  if (this.cache[searchString]) {
    return this.owner.found(this.cache[searchString]);
  }

  // Initiate delayed search.
  if (this.timer) {
    clearTimeout(this.timer);
  }
  this.timer = setTimeout(function () {
    db.owner.setStatus('begin');

    // Ajax GET request for autocompletion. We use Drupal.encodePath instead of
    // encodeURIComponent to allow autocomplete search terms to contain slashes.
    $.ajax({
      type: 'GET',
      url: db.uri + '/' + Drupal.encodePath(searchString),
      dataType: 'json',
      success: function (matches) {
        if (typeof matches.status == 'undefined' || matches.status != 0) {
          db.cache[searchString] = matches;
          // Verify if these are still the matches the user wants to see.
          if (db.searchString == searchString) {
            db.owner.found(matches);
          }
          db.owner.setStatus('found');
        }
      },
      error: function (xmlhttp) {
        alert(Drupal.ajaxError(xmlhttp, db.uri));
      }
    });
  }, this.delay);
};

/**
 * Cancels the current autocomplete request.
 */
Drupal.ACDB.prototype.cancel = function () {
  if (this.owner) this.owner.setStatus('cancel');
  if (this.timer) clearTimeout(this.timer);
  this.searchString = '';
};

})(jQuery);
;

(function ($) {

Drupal.behaviors.nodeFieldsetSummaries = {
  attach: function (context) {
    $('fieldset.node-form-revision-information', context).drupalSetSummary(function (context) {
      var revisionCheckbox = $('.form-item-revision input', context);

      // Return 'New revision' if the 'Create new revision' checkbox is checked,
      // or if the checkbox doesn't exist, but the revision log does. For users
      // without the "Administer content" permission the checkbox won't appear,
      // but the revision log will if the content type is set to auto-revision.
      if (revisionCheckbox.is(':checked') || (!revisionCheckbox.length && $('.form-item-log textarea', context).length)) {
        return Drupal.t('New revision');
      }

      return Drupal.t('No revision');
    });

    $('fieldset.node-form-author', context).drupalSetSummary(function (context) {
      var name = $('.form-item-name input', context).val() || Drupal.settings.anonymous,
        date = $('.form-item-date input', context).val();
      return date ?
        Drupal.t('By @name on @date', { '@name': name, '@date': date }) :
        Drupal.t('By @name', { '@name': name });
    });

    $('fieldset.node-form-options', context).drupalSetSummary(function (context) {
      var vals = [];

      $('input:checked', context).parent().each(function () {
        vals.push(Drupal.checkPlain($.trim($(this).text())));
      });

      if (!$('.form-item-status input', context).is(':checked')) {
        vals.unshift(Drupal.t('Not published'));
      }
      return vals.join(', ');
    });
  }
};

})(jQuery);
;
(function ($) {

  /* This reflect the logic of revisioning_scheduler_node_presave().
   * Scheduling a publication date is only appropriate if:
   * o the node is NOT published
   * o the node is already published, but the new revision to be created goes in
   *   moderation, i.e will not be published yet
   */
  Drupal.behaviors.showPublicationDateTimeField = {
    attach: function (context) {
      var publishedBox = $('.form-item-status input');
      var newRevisionInModerationRadio = $('#edit-revision-operation-2');
      var publicationDate = $('.form-item-publication-date');

      // Page-load: hide the publication date textbox, if necessary
      if ((publishedBox.is(':checked') && !newRevisionInModerationRadio.is(':checked'))) {
        publicationDate.hide();
      }

      // Define handlers for clicks on the Published box and moderation radio buttons.
      publishedBox.click(function() {
        if (!publishedBox.is(':checked') || newRevisionInModerationRadio.is(':checked')) {
          publicationDate.show();
        }
        else {
          publicationDate.hide();
        }
      });
      $('#edit-revision-operation input').click(function() {
        if (!publishedBox.is(':checked') || newRevisionInModerationRadio.is(':checked')) {
          publicationDate.show();
        }
        else {
          publicationDate.hide();
        }
      });
    }
  };

})(jQuery);
;
(function ($) {

  Drupal.behaviors.suppressPublishedForModeratedContent = {
    attach: function (context) {

      var publishedDiv = $('.form-item-status', context);
      var firstSummaryTab = $('.vertical-tabs span.summary:first', context)
      var lastSummaryTab  = $('.vertical-tabs span.summary:last', context);
      var textNewRevision = Drupal.t('New revision');
      var textNoRevision = Drupal.t('No revision');
      var textPublished = Drupal.t('Published');
      var textNotPublished = Drupal.t('Not published');
      var checked = $('.form-item-revision-operation .form-radio:checked').val();

      if (checked == 0) {
        // REVISIONING_NO_REVISION.
        firstSummaryTab.text(firstSummaryTab.text().replace(textNewRevision, textNoRevision));
      }
      else if (checked == 2) {
        // REVISIONING_NEW_REVISION_WITH_MODERATION.
        // Hide the "Published" check-box, as it does not apply in this mode
        // because the new revision will always be unpublished.
        publishedDiv.hide();
        lastSummaryTab.text(lastSummaryTab.text().replace(textPublished, textNotPublished));
      }

      $('.form-radio').click(function() {
        checked = $('.form-item-revision-operation .form-radio:checked').val();

        if (checked == 2) {
          // REVISIONING_NEW_REVISION_WITH_MODERATION.
          publishedDiv.hide();
          lastSummaryTab.text(lastSummaryTab.text().replace(textPublished, textNotPublished));
        }
        else {
          // REVISIONING_NO_REVISION or REVISIONING_NEW_REVISION_NO_MODERATION.
          publishedDiv.show();
          if (checked == 0) {
            // REVISIONING_NO_REVISION.
            firstSummaryTab.text(firstSummaryTab.text().replace(textNewRevision, textNoRevision));
          }
          if ($('.form-item-status input').is(':checked')) {
            updatedText = lastSummaryTab.text().replace(textNotPublished, textPublished);
          }
          else {
            updatedText = lastSummaryTab.text().replace(textPublished, textNotPublished);
          }
          lastSummaryTab.text(updatedText);
        }

      });
    }
  };

})(jQuery);
;
