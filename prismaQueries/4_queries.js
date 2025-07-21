const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const util = require('util');

function getAllStaff() {
	return prisma.staff.findMany({
	})
}

/** Section A: Basic Queries */


function getHodInfo() {
	return prisma.department.findMany({
		//TODO: Implement the query
		select: {
			deptName: true,
			hodApptDate: true,
		},
	});
}


function getDeptStaffingInfo() {
	return prisma.department.findMany({
		//TODO: Implement the query
select: {
			deptCode: true,
			noOfStaff: true,
		},
	});
}


/** Section B: Filtering Queries */


function getStaffofSpecificCitizenships() {
	return prisma.staff.findMany({
		//TODO: Implement the query
 where: {
            citizenship: {
                in: ['Hong Kong', 'Korea', 'Malaysia', 'Thailand']
            }
        },
        orderBy: [
            { 
                citizenship: 'asc' // Adjust if needed to force your own order
            }
        ],
		select: {
			citizenship: true,
			staffName: true,
		},
	});
}


function getStaffByCriteria1() {
	return prisma.staff.findMany({
		where: {
			gender: 'M',
			maritalStatus: 'M',
			pay: {
				gte: 4000,
				lte: 6000
			}
		},
		orderBy: [
			{ gender: 'asc' },
			{ pay: 'asc' }
		],
		select: {
			gender: true,
			pay: true,
			maritalStatus: true,
			staffName: true
		}
	});
}




/** Section C: Relation Queries */

async function getDepartmentCourses() {
	return prisma.department.findMany({
		//TODO: Implement the query

	})
}


const getStaffAndDependents = () => {
	return prisma.staff.findMany({
		//TODO: Implement the query

	});
};

const getDepartmentCourseStudentDob = () => {
	return prisma.department.findMany({
		//TODO: Implement the query

	});
};

async function main(argument) {
	let results;
	switch (argument) {
		case 'getAllStaff':
			results = await getAllStaff();
			break;
		case 'getHodInfo':
			results = await getHodInfo();
			break;
		case 'getDeptStaffingInfo':
			results = await getDeptStaffingInfo();
			break;
		case 'getStaffofSpecificCitizenships':
			results = await getStaffofSpecificCitizenships();
			break;
		case 'getStaffByCriteria1':
			results = await getStaffByCriteria1();
			break;
		case 'getDepartmentCourses':
			results = await getDepartmentCourses();
			break;
		case 'getStaffAndDependents':
			results = await getStaffAndDependents();
			break;
		case 'getDepartmentCourseStudentDob':
			results = await getDepartmentCourseStudentDob();
			break;
		default:
			console.log('Invalid argument');
			break;
	}
	results && console.log(util.inspect(results, { showHidden: false, depth: null, colors: true }));
}

main(process.argv[2]);
