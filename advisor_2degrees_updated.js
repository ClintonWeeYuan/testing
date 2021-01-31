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

function allocate_property(submission){
  switch (submission.field.id){
    case 'w66JwnX9iTNN':
      responses.basic.first_name = determine_answer_type(submission);
      break;
    case '5qo5qCnao6us':
      responses.basic.last_name = determine_answer_type(submission);
      break;
    case 'PQpJGc1NAsDv':
      responses.basic.country = determine_answer_type(submission);
      break;
    case 'VyANytbdlYkV':
      responses.commitment.engagement = determine_answer_type(submission);
      break;
    case '4RnTll1jr6Ok':
      responses.commitment.menteeCount = determine_answer_type(submission);
      break;
    case 'LvT4k99uRue1':
      responses.basic.number_of_postgrad_degrees = determine_answer_type(submission);
      break;
    case 'cI8euXZaS0dw':
      responses.recent_postgrad_degree.university = determine_answer_type(submission);
      break;
    case 'gISRJtLNpEs8':
      responses.recent_postgrad_degree.field = determine_answer_type(submission);
      break;
    case '3XDW4IN0mHd6':
      responses.recent_postgrad_degree.type = determine_answer_type(submission);
      break;
    case '3d2qKnzJMFpk':
      responses.recent_postgrad_degree.degree = determine_answer_type(submission);
      break;
    case 'GTCEMyJOVla':
      responses.previous_postgrad_degree.university = determine_answer_type(submission);
      break;
    case 'ymNe6FCuosCB':
      responses.previous_postgrad_degree.field = determine_answer_type(submission);
      break;
    case '6ypaSwLepkev':
      responses.previous_postgrad_degree.type = determine_answer_type(submission);
      break;
    case 'z9ZMKX6nNulR':
      responses.previous_postgrad_degree.degree = determine_answer_type(submission);
      break;
    case 'GH86MhHTBKQS':
      responses.undergrad_degree.country = determine_answer_type(submission);
      break;
    case 'bYZnAF99HIsO':
      responses.undergrad_degree.field = determine_answer_type(submission);
      break;
    case 'F09k65TL5Lwf':
      responses.undergrad_degree.university = determine_answer_type(submission);
      break;
    case '1ohSgVBqh4Q7':
      responses.undergrad_degree.degree = determine_answer_type(submission);
      break;
    case 'VUVt6FCal0wz':
      responses.basic.email = determine_answer_type(submission);
      break;
    case 'qWXMTVrE6Wto':
      responses.basic.linkedIn = determine_answer_type(submission);
      break;
    case 'Jc9Lwcd8aJvv':
      responses.miscellaneous.publicity_tracker = determine_answer_type(submission);
      break;
    case '0oXfDldHe0rG':
      responses.miscellaneous.extra_info = determine_answer_type(submission);
      break;
  };
}

//Responses object structure//

const responses = {
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

  }
}


//Run through json package
for(i = 0, len = answers.length; i < len; i++){
  allocate_property(answers[i]);
}

console.log(responses)

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
    type
    degree:
  },

  previous_postgrad_degree:{
  university: ,
  field: ,
  degree:
},

  undergrad_degree:{
  country: ,
  university: ,
  field: ,
  degree:
},

  miscellaneous: {
  extra_info: ,
  publicity_tracker:
  }
}
*/
