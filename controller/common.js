
function Common() {

}

//############interface area###############

/**
 * @method post
 * @summary summary test login
 * @description description test login
 * @requestParam p1 
 * @requestParam p2 
 *  */
Common.prototype.login = async function (ctx, next){
	const paramsBody = ctx.request.body,
		p1 = paramsBody.p1,
		p2 = paramsBody.p2;
	ctx.body = {code: 200,};
}

//############interface area###############


module.exports = new Common();
