import { useState } from 'react';
import { firestore } from '../../config/firestore/store';
import { collection, getDocs } from 'react-redux-firebase';

export default function fetchTenantId(props) {
    
    const querySnapshot = getDocs(collection(firestore, "users"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
    });
    
    // firestore
    //     .get({ collection: 'tenants', doc: props.tenantId })
    //     .then((tenant) => {
    //         setName(tenant.data().name);
    //         setEmail(tenant.data().email);
    //         setNumberOfEmployees(tenant.data().numberOfEmployees);
    //         setLocation(tenant.data().location);
    // });
    return (
        // { name, email, numberOfEmployees, location }
        null
    )
}



export function edit(props) {
    console.log(props);
    
    
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [numberOfEmployees, setNumberOfEmployees] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState(null);

    setName(props.name);
    setEmail(props.email);
    setNumberOfEmployees(props.numberOfEmployees);
    setLocation(props.location);

    

    const submitting = () => {
        try {
            const tenantId = props.tenantId;
            firestore.update(`tenants/${tenantId}`, { name, email, numberOfEmployees, location });
            setError([false, 'Edit successfully'])
        } catch (err) {
            setError([true, err.message]);
        }
    };

    console.log(submitting);

    return (
        error
    )
}