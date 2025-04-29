module.exports = (temp, resource) => {
  let output = temp.replace(/{%DOMAIN_NAME%}/g, resource.domain_name);
  output = output.replace(/{%DOMAIN_ID%}/g, resource["domain_id"]);
  output = output.replace(/{%SUB_DOMAIN_NAME%}/g, resource.sub_domain_name);
  output = output.replace(/{%SUB_DOMAIN_ID%}/g, resource.sub_domain_id);
  // console.log(output);
  return output;
};
