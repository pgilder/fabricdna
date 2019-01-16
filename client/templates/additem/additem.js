/*Template.additem.helpers({
    'credititem': function(){
        return Creditor.find();
    }
 }); */


 Template.additem.events({
 	'click .submit': function() {
 		Recipes.insert({
 			recipeName: $('.recipe_name').val(),
      text: $('.recipe_text').val(),
      image: $('.recipe_image').val(),
      userAvatar: $('https://avatars3.githubusercontent.com/u/204768?v=2&s=400').val(),
      userName: $('.user_name').val(),
      place: $('.recipe_place').val(),
      createdAt: new Date()
 		});
      Router.go('recipes');
 	}
 });
/*

Activities.insert({
      recipeName: 'summer-apricots-honey-panna-cotta',
      text: 'I substituted strawberries for apricots - incredible!',
      image: '/img/activity/activity-placeholder-strawberry-640x640.jpg',
      userAvatar: 'https://avatars3.githubusercontent.com/u/204768?v=2&s=400',
      userName: 'Matt Debergalis',
      place: 'SoMA, San Francisco',
      date: new Date
    });*/

/*
 Template.additem.events({
  'click .submit': function() {
    Creditor.insert({
      recipeName: $('.recipe_name').val(),
      text: $('.recipe_text').val(),
      recipebalance: $('.recipe_balance').val(),
      recipestatus: $('.recipe_status').val(),
      recipeagency: $('.recipe_agency').val(),
      icon: $('.icon_status').val(),
      reportdate: $('.report_date').val(),
      createdAt: new Date()
    });
      Router.go('creditProfile');

      */