### simpleDrop ###
## Description ##
Writen by callibrator.
Email: callibrator21@gmail.com


simpleDrop is a simple javascript library which can be used to create drop Down menus/divs etc.
The pros for this lib is that it does not depend on any other library such as Jquery or Boostrap

## Getting Started ##

It is really simple to install and use it on your website...

1)Download the file from github

2)add the file to your header. you can do that by adding in the head section of your page the following line:
```
<script src='path/to/lib/simpledrop-v0.0.1.js'></script>
```

Header example:
```
<head>
	<title>simpleDrop example</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src='lib/simpledrop-v0.0.1.js'></script>
</head>
```

3)Add your html dropdown menu on your page. For example:
```
<div id='my_menu' class='second_drop'>
	<span class='toggle-button second_drop_button'>Making it really easy to be used for:</span>
	<ul class='blue drop-toggle'>
		<li>Big project in which you do not want to import any more libraries...</li>
		<li>Projects which you do not want to heavily edit the html.</li>
		<li>well...</li>
	</ul>
</div>
```

The outer div requires an id in order to assign the functionality of drop down through javascript.
there must be at least one element with a class named toggle-button and at least one element with a class named drop-toggle.
The element with the class toggle-button is the button of your drop down menu. the user will click on it in order to see or hide the menu.
The element with the class drop-toggle is the element which will container your content that the user will see when he clicks on your menu.

4)Adding the functionality.
There are many ways to do this. the most common and simple way to do it is to add the following code on your bottom of your page:

```
<script type='text/javascript'>
simpleDrop.create("my_menu") //keep in mind that you are parsing the id of the outer div and not the drop button here!

</script>
```

Or you can add the functionality to a different file and just load it when you wan't it.

Enjoy.
