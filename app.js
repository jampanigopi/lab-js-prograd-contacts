var player = '<h2>Lists of Users</h2>';

const fetch_data = () => {
    url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log('Resolved Promise Data :', data);

            data.map((user) => {
                player += `<div class="player">
                      <div class="strength">Name : ${user.name}</div>
                      <div>Email   : ${user.email}</div>
                      <div>Phone   : ${user.phone}</div>
                      <div>Website : ${user.website}</div>
                      <div>Company : ${user.company.name}</div>
                      <div>City    : ${user.address.city}</div>
                      <div>Zipcode : ${user.address.zipcode}</div>
                     </div>`;
            });

            document.getElementById('message').innerHTML = player;
        })
        .catch((err) => {
            console.log('Promise rejected.');
            console.log(err.message);
        });
};

const handle = () => {
    fetch_data();
};
