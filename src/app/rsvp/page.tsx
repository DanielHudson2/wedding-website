'use client';
import React, { useState } from 'react';

interface Person {
	firstName: string;
	lastName: string;
	attending: boolean;
	duration: string;
	starter: string;
	mainCourse: string;
	dessert: string;
}

const RSVPPage = () => {
	const [people, setPeople] = useState<Person[]>([
		{
		firstName: '',
		lastName: '',
		attending: false,
		duration: '',
		starter: '',
		mainCourse: '',
		dessert: '',
		},
	]);

	const addPerson = () => {
		setPeople([
		...people,
		{
			firstName: '',
			lastName: '',
			attending: false,
			duration: '',
			starter: '',
			mainCourse: '',
			dessert: '',
		},
		]);
	};

	const removePerson = (index: number) => {
		setPeople(people.filter((_, i) => i !== index));
	};

	const handleFieldChange = (
		index: number,
		field: keyof Person,
		value: string | boolean
	) => {
		setPeople((prevPeople) =>
		prevPeople.map((person, i) =>
			i === index ? { ...person, [field]: value } : person
		)
		);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<main>
			<h1>RSVP</h1>
			<form
				name="rsvp-form"
				method="POST"
				data-netlify="true"
			>
				{people.map((person, index) => (
				<div className="form-section" key={index}>
					<h3>{person.firstName} {person.lastName}</h3>
					<div className="form-row form-row--50">
						<label>
							First Name:
							<input
								type="text"
								name={`firstName${index}`}
								value={person.firstName}
								required
								onChange={(e) =>
								handleFieldChange(index, 'firstName', e.target.value)
								}
							/>
						</label>
						<label>
							Last Name:
							<input
								type="text"
								value={person.lastName}
								required
								onChange={(e) =>
								handleFieldChange(index, 'lastName', e.target.value)
								}
							/>
						</label>
					</div>
					<div className="form-row">
						<label>
							Will you be attending our wedding?:
							<input
								type="checkbox"
								checked={person.attending}
								onChange={(e) =>
								handleFieldChange(index, 'attending', e.target.checked)
								}
							/>
						</label>
					</div>
					{person.attending && (
						<div className="form-row">
							<label>
								Will you attending the whole day, the ceremony/breakfast or just the evening?:
								<select
									value={person.duration}
									required
									onChange={(e) =>
										handleFieldChange(index, 'duration', e.target.value)
									}
								>
									<option value="Whole day">Whole day</option>
									<option value="Ceremony/Breakfast">Ceremony/Breakfast</option>
									<option value="Evening">Evening</option>
								</select>
							</label>
						</div>
					)}
					{person.attending && person.duration !== 'Evening' && (
						<div className="form-row">
							<label>
								Please select the starter you would like:
								<select
									value={person.starter}
									required
									onChange={(e) =>
										handleFieldChange(index, 'starter', e.target.value)
									}
								>
									<option value="Starter A">Starter A</option>
									<option value="Starter B">Starter B</option>
								</select>
							</label>
						</div>
					)}
					{person.attending && person.duration !== 'Evening' && (
						<div className="form-row">
							<label>
								Please select the main you would like:
								<select
									value={person.mainCourse}
									required
									onChange={(e) =>
										handleFieldChange(index, 'mainCourse', e.target.value)
									}
								>
									<option value="Main Course A">Main Course A</option>
									<option value="Main Course B">Main Course B</option>
								</select>
							</label>
						</div>
					)}
					{person.attending && person.duration !== 'Evening' && (
						<div className="form-row">
							<label>
								Please select the dessert you would like:
								<select
									value={person.dessert}
									required
									onChange={(e) =>
										handleFieldChange(index, 'dessert', e.target.value)
									}
								>
									<option value="Dessert A">Dessert A</option>
									<option value="Dessert B">Dessert B</option>
								</select>
							</label>
						</div>
					)}
					{index > 0 && (
						<div className="form-row">
						<button type="button" onClick={() => removePerson(index)}>
							Remove Person
						</button>
						</div>
					)}
				</div>
				))}
				<div className="form-row">
					<h2>Do you need to RSVP for anyone else?</h2>
					<button type="button" onClick={addPerson}>
						Add Another Person
					</button>
				</div>
				<div className="form-row">
					<button type="submit">Submit</button>
				</div>
			</form>
		</main>
	);
};

export default RSVPPage;
