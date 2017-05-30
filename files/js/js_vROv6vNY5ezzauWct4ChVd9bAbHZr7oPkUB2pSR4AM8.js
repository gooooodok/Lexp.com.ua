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

  Drupal.behaviors.captcha = {
    attach: function (context) {

      // Turn off autocompletion for the CAPTCHA response field.
      // We do it here with Javascript (instead of directly in the markup)
      // because this autocomplete attribute is not standard and
      // it would break (X)HTML compliance.
      $("#edit-captcha-response").attr("autocomplete", "off");

    }
  };

  Drupal.behaviors.captchaAdmin = {
    attach: function (context) {
    	// Add onclick handler to checkbox for adding a CAPTCHA description
    	// so that the textfields for the CAPTCHA description are hidden
    	// when no description should be added.
      // @todo: div.form-item-captcha-description depends on theming, maybe
      // it's better to add our own wrapper with id (instead of a class).
    	$("#edit-captcha-add-captcha-description").click(function() {
    		if ($("#edit-captcha-add-captcha-description").is(":checked")) {
    			// Show the CAPTCHA description textfield(s).
    			$("div.form-item-captcha-description").show('slow');
    		}
    		else {
    			// Hide the CAPTCHA description textfield(s).
    			$("div.form-item-captcha-description").hide('slow');
    		}
    	});
    	// Hide the CAPTCHA description textfields if option is disabled on page load.
    	if (!$("#edit-captcha-add-captcha-description").is(":checked")) {
    		$("div.form-item-captcha-description").hide();
    	}
    }

  };

})(jQuery);
;
