---
avatar: "/uploads/raufsamestone.jpg"
date: 2021-02-12T21:00:00Z
path: netlify-form-dynamic title
title: 'Creating Dynamic Form Titles for Netlify Form '
tags:
- forms
- netlify
writer: ''
english: true

---
Firstly you have to create a form-name for **fetching.**   
  
  
<deckgo-highlight-code>  
<code slot="code">  
...

'form-name': _form.getAttribute_('name'),  
...  
</code>  
</deckgo-highlight-code>  
  
  
  
<deckgo-highlight-code>  
<code slot="code">  
const _handleSubmit_ = _e_ => {

_e.preventDefault_()

const _form_ = _e.target_

if (_form.checkValidity_() === _false_) {

_e.preventDefault_()

_e.stopPropagation_()

}

_setValidated_(_true_)

if (_form.checkValidity_() === _true_)

_fetch_('/', {

 _method_: 'POST',

 _headers_: { 'Content-Type': 'application/x-www-form-urlencoded' },

 _body_: _encode_({

'form-name': _form.getAttribute_('name'),

...state,

}),

})

}  
</code>  
</deckgo-highlight-code>

And 

<deckgo-highlight-code>  
<code slot="code">  
<FormBody

_netlify_

_validated_={validated}

_onSubmit_={handleSubmit}

_name_={\`'Your_Form_${formTitle}'}\`}

_method_="POST"

_action_="/success/"

_data-netlify_="true"

_data-netlify-honeypot_="bot-field"

>  
</code>  
</deckgo-highlight-code>