/**
 * Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */
!function(){CKEDITOR.on("instanceReady",function(e){var n=e.editor,t=CKEDITOR.document.$.getElementsByName("ckeditor-sample-required-plugins"),i=t.length?CKEDITOR.dom.element.get(t[0]).getAttribute("content").split(","):[],r=[];if(i.length){for(var o=0;o<i.length;o++)n.plugins[i[o]]||r.push("<code>"+i[o]+"</code>");if(r.length){var l=CKEDITOR.dom.element.createFromHtml('<div class="warning"><span>To fully experience this demo, the '+r.join(", ")+" plugin"+(r.length>1?"s are":" is")+" required.</span></div>");l.insertBefore(n.container)}}})}();