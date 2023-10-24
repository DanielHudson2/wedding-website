'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface Person {
	firstName: string;
	lastName: string;
	attending: string;
	duration: string;
	dietryRequirements: string;
}

const RSVPPage = () => {
	const [people, setPeople] = useState<Person[]>([
		{
			firstName: '',
			lastName: '',
			attending: 'Yes',
			duration: '',
			dietryRequirements: '',
		},
	]);

	const addPerson = () => {
		setPeople([
			...people,
			{
				firstName: '',
				lastName: '',
				attending: 'Yes',
				duration: '',
				dietryRequirements: '',
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

		// Collect the form data
		e.preventDefault();

		// Format the form data for submission
		const formattedData = people.map((person) => {
			return `First Name: ${person.firstName}
			Last Name: ${person.lastName}
			Attending: ${person.attending}
			Duration: ${person.duration}
			Dietry Requirements: ${person.dietryRequirements}
		`;
		});

  		const emailContent = formattedData.join('\n\n');

		// Send the email using EmailJS
		emailjs.send(
			'service_jdnvtid', 
			'template_29m8iud', 
			{
				message: emailContent,
			},
			'lFLTq3pU-IM9x461r')
			.then((response) => {
				console.log('Email sent successfully!', response);
				window.location.href = '/success'; // Redirect to a success page
			})
			.catch((error) => {
				console.error('Email sending failed:', error);
				// Handle error case
			}
		);
	};

	return (
		<main>
			<div className="width-container flow">
				<div className="hoz-padding flow">
					<h1 className='body-font'>RSVP</h1>
					<p>Use the form below to let us know if you and anyone else you need to RSVP for are able to attend our wedding.</p>
				</div>
				<form onSubmit={handleSubmit}
					name="rsvp-form"
					method="POST"
					data-netlify="true"
					className='rsvp-form flow pure-form'
				>
					<input type="hidden" name="form-name" value="rsvp-form" />
					{people.map((person, index) => (
					<div className="form-section flow" key={index}>
						<h3>{person.firstName} {person.lastName}</h3>
						<div className="form-row form-row--50">
							<label>
								<p>First Name:</p>
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
								<p>Last Name:</p>
								<input
									type="text"
									name={`lastName${index}`}
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
								<p>Will you be attending our wedding?:</p>
								<select
									value={person.attending}
									required
									name={`attending${index}`}
									onChange={(e) =>
										handleFieldChange(index, 'attending', e.target.value)
									}
								>
									<option value="Yes">I am able to attend your wedding</option>
									<option value="No">I am unable to attend your wedding</option>
								</select>
							</label>
						</div>
						{person.attending === 'Yes' && (
							<div className="form-row">
								<label>
									<p>Will you attending the whole day, the ceremony/breakfast or just the evening?:</p>
									<select
										value={person.duration}
										required
										name={`duration${index}`}
										onChange={(e) =>
											handleFieldChange(index, 'duration', e.target.value)
										}
									>
										<option value="" disabled>Select duration</option>
										<option value="Whole day">Whole day</option>
										<option value="Ceremony/Breakfast">Ceremony/Breakfast</option>
										<option value="Evening">Evening</option>
									</select>
								</label>
							</div>
						)}
						{person.attending === 'Yes' && person.duration !== 'Evening' && (
							<div className="form-row">
								<label>
									<p>Do you have any dietry requirements: (The food can be found on your invitation or <a href="/the-big-day" target='_blank'>here</a>)</p>
									<textarea 
									name={`dietryRequirements${index}`} 
									value={person.dietryRequirements}
									onChange={(e) =>
									handleFieldChange(index, 'dietryRequirements', e.target.value)
									}
									>
									</textarea>
								</label>
							</div>
						)}
						{index > 0 && (
							<div className="form-row">
								<button className='button--primary' type="button" onClick={() => removePerson(index)}>
									Remove Person
								</button>
							</div>
						)}
					</div>
					))}
					<div className="form-row">
						<p>Do you need to RSVP for anyone else?</p>
						<button className="button--primary" type="button" onClick={addPerson}>
							Add Another Person
						</button>
					</div>
					<button className='button--secondary' type="submit">Submit</button>
				</form>
			</div>
		</main>
	);
};

export default RSVPPage;
