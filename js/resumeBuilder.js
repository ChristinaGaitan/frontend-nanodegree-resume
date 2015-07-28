$('#header').prepend(formattedRole)
$('#header').prepend(formattedName)

var work = {}
work.position = 'Web developer';
work.employer = 'Tango';
work.years = 0.5;

var education = {};
education['name'] = 'CENIDET';
education['years'] = '2009-2012';
education['city'] = 'Cuernavaca, Mor. Mx.';

$('#main').append(work['position']);
$('#main').append(education.name);
