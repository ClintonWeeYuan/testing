let answers = [
  {
	"type": "text",
	"text": "1.First Name",
	"field": {
	  "id": "w66JwnX9iTNN",
	  "type": "short_text",
	  "ref": "5d0f62060d67d479"
	}
  },
  {
	"type": "text",
	"text": "2.Last Name",
	"field": {
	  "id": "5qo5qCnao6us",
	  "type": "short_text",
	  "ref": "98d360cb-9e77-48e6-a876-215d699f9944"
	}
  },
  {
	"type": "choice",
	"choice": {
	  "label": "3.Country"
	},
	"field": {
	  "id": "PQpJGc1NAsDv",
	  "type": "dropdown",
	  "ref": "3fe83e99-f11b-4261-8aa1-7b6e7aea117a"
	}
  },
  {
	"type": "choices",
	"choices": {
	  "labels": [
		"4.1.Engagement 1",
		"4.2.Engagement 2"
	  ]
	},
	"field": {
	  "id": "VyANytbdlYkV",
	  "type": "multiple_choice",
	  "ref": "1ca71d360ce40101"
	}
  },
  {
	"type": "choice",
	"choice": {
	  "label": "2" //5.menteeCount available choices are "1", "2", "3" & "4 or more".
	},
	"field": {
	  "id": "4RnTll1jr6Ok",
	  "type": "multiple_choice",
	  "ref": "404fce30-c883-40bd-8b4c-82462d8947da"
	}
  },
  {
	"type": "choice",
	"choice": {
	  "label": "Yes, I have two or more postgraduate degrees" //6.postgradDegNum
	},
	"field": {
	  "id": "LvT4k99uRue1",
	  "type": "multiple_choice",
	  "ref": "cca8018e-515f-423d-b2b4-b5af82a8a025"
	}
  },
  {
	"type": "choice",
	"choice": {
	  "label": "7.Recent University"
	},
	"field": {
	  "id": "cI8euXZaS0dw",
	  "type": "multiple_choice",
	  "ref": "06da5600-8350-4651-837e-f9ea0629c137"
	}
  },
  {
	"type": "choice",
	"choice": {
	  "label": "8.Recent PG field"
	},
	"field": {
	  "id": "gISRJtLNpEs8",
	  "type": "picture_choice",
	  "ref": "79e573e7-d7f3-43b9-a241-d1e96202a0ec"
	}
  },
  {
	"type": "choice",
	"choice": {
	  "label": "9.Recent PG type (PhD or Master's)"
	},
	"field": {
	  "id": "3XDW4IN0mHd6",
	  "type": "multiple_choice",
	  "ref": "f93e98a8-0c95-44c9-9ba9-e7ac80bcffb2"
	}
  },
  {
	"type": "text",
	"text": "10.Recent PG full title",
	"field": {
	  "id": "3d2qKnzJMFpk",
	  "type": "short_text",
	  "ref": "2e0b0915-52ab-49cb-8001-07937265a5cf"
	}
  },
  {
	"type": "choice",
	"choice": {
	  "label": "11.Previous University"
	},
	"field": {
	  "id": "GTCEMyJOVlal",
	  "type": "multiple_choice",
	  "ref": "283334bf-cfb0-4936-9d6a-c6175ba08046"
	}
  },
  {
	"type": "choice",
	"choice": {
	  "label": "12.Previous PG field"
	},
	"field": {
	  "id": "ymNe6FCuosCB",
	  "type": "picture_choice",
	  "ref": "01026530-9927-4765-a265-80ba25fbb84e"
	}
  },
  {
	"type": "choice",
	"choice": {
	  "label": "13.Previous PG type (PhD or Master's)"
	},
	"field": {
	  "id": "6ypaSwLepkev",
	  "type": "multiple_choice",
	  "ref": "19dff943-781c-4157-93e6-6adec9e286b3"
	}
  },
  {
	"type": "text",
	"text": "14.Previous PG full title",
	"field": {
	  "id": "z9ZMKX6nNulR",
	  "type": "short_text",
	  "ref": "a13c7bd8-3ecd-401e-9fc7-f7358157f2b0"
	}
  },
  {
	"type": "choice",
	"choice": {
	  "label": "15.UG country"
	},
	"field": {
	  "id": "GH86MhHTBKQS",
	  "type": "dropdown",
	  "ref": "cd9ed467-7fcc-4516-ae1e-874480531cd5"
	}
  },
  {
	"type": "choice",
	"choice": {
	  "label": "16.UG field"
	},
	"field": {
	  "id": "bYZnAF99HIsO",
	  "type": "picture_choice",
	  "ref": "f5d87921-1fcc-4b7f-969d-1601c93d22be"
	}
  },
  {
	"type": "text",
	"text": "17.UG University",
	"field": {
	  "id": "F09k65TL5Lwf",
	  "type": "short_text",
	  "ref": "01dba68d-9c8e-4a63-a699-86b9673f599c"
	}
  },
  {
	"type": "text",
	"text": "18.UG full title",
	"field": {
	  "id": "1ohSgVBqh4Q7",
	  "type": "short_text",
	  "ref": "0fe3df8e-c94f-4e3a-84ad-a385c69157ef"
	}
  },
  {
	"type": "email",
	"email": "19.Email",
	"field": {
	  "id": "VUVt6FCal0wz",
	  "type": "email",
	  "ref": "ab4347cd-08db-4274-a04c-bf043224a76d"
	}
  },
  {
	"type": "text",
	"text": "20.LinkedIn (optional)",
	"field": {
	  "id": "qWXMTVrE6Wto",
	  "type": "short_text",
	  "ref": "3c54d358-ddd2-4d19-9d8e-e32405030579"
	}
  },
  {
	"type": "choices",
	"choices": {
	  "labels": [
		"21.1Friends/Family",
		"21.2University Newsletter and so on..."
  ],
	  "other": "21.3Other" //note at least one options must be chosen in this question, either the predefined choices and/or 'other' field
	},
	"field": {
	  "id": "Jc9Lwcd8aJvv",
	  "type": "multiple_choice",
	  "ref": "d9dbe258-d663-46f6-90af-e6af653e21d1"
	}
  },
  {
	"type": "text",
	"text": "22.Extra info (optional)",
	"field": {
	  "id": "0oXfDldHe0rG",
	  "type": "long_text",
	  "ref": "c0b2a1a1-10df-4677-ae17-c6a57ed9bcdf"
	}
  }
];

//Why doesn't previous PG have a country question?

//Function to determine the type of answer to retrieve
function determine_answer_type(submission){
  if ((submission.field.type === 'short_text') || (submission.field.type ===
  'long_text')){
    return submission.text;
  }

  else if(submission.field.type === 'dropdown'){
    return submission.choice.label;
  }

  else if(submission.field.type === 'picture_choice'){
    return submission.choice.label;
  }

  else if((submission.field.type === 'multiple_choice') ||
  (submission.field.type === ' picture_choice')){
    if (submission.type === 'choice'){
      return submission.choice.label;
    }

    else{
      return submission.choices.labels;
    }
  }

  else if(submission.field.type === 'email'){
    return submission.email;
  }

  else if(submission.field.type === 'website'){
    return submission.url;
  }
};

//function to allocate each answer to a property within our responses object
function determine_property(answer){
  if(answer.field.id === 'w66JwnX9iTNN'){
    return 'basic.first_name';
  }

  else if(answer.field.id === '5qo5qCnao6us'){
    return 'basic.last_name';
  }

  else if(answer.field.id === 'PQpJGc1NAsDv'){
    return 'basic.country';
  }

  else if(answer.field.id === 'VyANytbdlYkV'){
    return 'commitment.engagement';
  }

  else if(answer.field.id === '4RnTll1jr6O'){
    return 'commitment.menteeCount';
  }

  else if(answer.field.id === 'LvT4k99uRue1'){
    return 'basic.number_of_postgrad_degrees';
  }

  else if(answer.field.id === 'cI8euXZaS0dw'){
    return 'recent_postgrad_degree.university';
  }

  else if(answer.field.id === 'gISRJtLNpEs8'){
    return 'recent_postgrad_degree.field';
  }

  else if(answer.field.id === '3XDW4IN0mHd6'){
    return 'recent_postgrad_degree.type';
  }

  else if(answer.field.id === '3d2qKnzJMFpk'){
    return 'recent_postgrad_degree.title';
  }

  else if(answer.field.id === 'GTCEMyJOVlal'){
    return 'previous_postgrad_degree.university';
  }

  else if(answer.field.id === 'ymNe6FCuosCB'){
    return 'previous_postgrad_degree.field';
  }

  else if(answer.field.id === '6ypaSwLepkev'){
    return 'previous_postgrad_degree.type';
  }

  else if(answer.field.id === 'z9ZMKX6nNulR'){
    return 'previous_postgrad_degree.title';
  }

  else if(answer.field.id === 'GH86MhHTBKQS'){
    return 'undergrad_degree.country'
  }

  else if(answer.field.id === 'bYZnAF99HIsO'){
    return 'undergrad_degree.field';
  }

  else if(answer.field.id === 'F09k65TL5Lwf'){
    return 'undergrad_degree.university';
  }

  else if(answer.field.id === '1ohSgVBqh4Q7'){
    return 'undergrad_degree.title';
  }

  else if(answer.field.id === 'VUVt6FCal0wzs'){
    return 'basic.email';
  }

  else if(answer.field.id === 'qWXMTVrE6Wto'){
    return 'basic.linkedIn';
  }

  else if(answer.field.id === 'Jc9Lwcd8aJvv'){
    return 'miscellaneous.publicity_tracker';
  }

  else if(answer.field.id === '0oXfDldHe0rG'){
    return 'miscellaneous.extra_info';
  }
}


const database = {
  basic: {

  },

  commitment: {

  },

  recent_postgrad_degree: {

  },

  previous_postgrad_degree:{

  },

  undergrad_degree:{

  },

  miscellaneous:{

  },

  allocate_property: function(answers){
    for(i = 0, len = answers.length; i < len; i++){
        this[determine_property(answers[i])] = determine_answer_type(answers[i]);
    };
  }
};

database.allocate_property(answers);
console.log(database);

/*Responses object structure
const responses = {
  basic: {
    first_name,
    last_name,
    country,
    e-mail,
    number_of_postgrad_degrees,
    linkedin,
  },

  commitment:{
    engagement: ,
    menteeCount:
  },

  recent_postgrad_degree:{
    university: ,
    field: ,
    type:
    title:
  },

  previous_postgrad_degree:{
  university: ,
  type:
  field: ,
  title:
},

  undergrad_degree:{
  country: ,
  university: ,
  field: ,
  title:
},

  miscellaneous: {
  extra_info: ,
  publicity_tracker:
  }
}
*/
