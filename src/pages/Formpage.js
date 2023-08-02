import React from 'react';

const Formpage = () => {

	return (
		<>

			<div className='form-body'>

				<div class="container right-panel-active">

					<div className='row'>
						<div className='col-md-6'>
							<img className='img-col' src={require('../components/form-pic.jpg')} alt='loading' />
						</div>
						<div className='col-md-6'>
							<div class="">
								<form action="#" class="form" id="form2">
									<h2 class="form__title text-black" >Upadte Details</h2>
									<input type="text" placeholder="Name" class="input" />
									<input type="email" placeholder="Email" class="input" />
									<input type="text" placeholder="phone" class="input" />
									<button type='submit' class="btn">Upadte</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>


			</>
			)
}

			export default Formpage