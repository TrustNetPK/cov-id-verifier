import React, { useState } from 'react';
import { Container } from 'reactstrap';
import BookTicketForm from '../components/BookTicketForm';
import VaccineVerificationContainer from './VaccineVerificationContainer';


function BookTicketContainer() {
	const [verifyvaccine, setVaccine] = useState(true)
	const [from, setFrom] = useState('Select From Location')
	const [to, setTo] = useState('Select To Location')
	const [name, setName] = useState('')
	const [CNIC, setCNIC] = useState('')
	const [passportno, setPassport] = useState('')
	const [dosage, setDosage] = useState('Dosage')
	const [batch, setBatch] = useState('Vaccination Batch #')
	const [expiry, setExpiry] = useState('Expiry')
	const [vaccName, setVaccName] = useState('Vaccination Name')
	return (
		<Container className="pt-2 mt-2 mb-5 ">
			{verifyvaccine && <BookTicketForm From={from} To={to} PersonName={name} Passport={passportno} Cnic={CNIC} Name={vaccName} Expiry={expiry} Batch={batch} Dosage={dosage} dataCallback={(props) => {
				setFrom(props.From)
				setTo(props.To)
				setName(props.Name)
				setCNIC(props.CNIC)
				setPassport(props.Passport)
				setVaccine(false)

			}} />}
			{!verifyvaccine && <VaccineVerificationContainer dataCallback={(props) => {
				setDosage(props.Dosage)
				setExpiry(props.Expiry)
				setVaccName(props.Name)
				setBatch(props.Batch)
				setVaccine(true)
			}} />}
		</Container>
	);
}

export default BookTicketContainer;