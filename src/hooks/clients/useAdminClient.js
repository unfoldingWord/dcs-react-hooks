import PropTypes from 'prop-types';
import { AdminApi } from "dcs-js";
import { AxiosInstance } from "axios";
import { getApiConfig } from "@helpers/api";

/**
 * Uses AdminApi from dcs-js.
 */
export const useAdminClient = ({ token, basePath, adminClient, axios, configuration } = {}) => {
  if (adminClient instanceof AdminApi) return adminClient;
  const _configuration = getApiConfig({ token, ...configuration, basePath });
  return new AdminApi(_configuration, _configuration.basePath, axios);
};

useAdminClient.propTypes = {
  token: PropTypes.string,
  basePath: PropTypes.string,
  adminClient: PropTypes.instanceOf(AdminApi),
  axios: PropTypes.instanceOf(AxiosInstance),
  /** *dcs-js* instance config */
  configuration: PropTypes.shape({
    apiKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.instanceOf(Promise)]),
    username: PropTypes.string,
    password: PropTypes.string,
    accessToken: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.instanceOf(Promise)]),
    basePath: PropTypes.string,
    baseOptions: PropTypes.object,
  })
};