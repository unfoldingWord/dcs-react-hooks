import useSwr from 'swr';
import { useOrgApi } from '../../api/useOrgApi';
import { useAuthentication } from '../user/useAuthentication';

export function useAllOrganizations({ organizationClient, options, configuration, axios }) {
  const { state: { token } } = useAuthentication({});
  
  const _organizationClient = useOrgApi({organizationClient, token: token?.sha1, ...configuration, axios});

  const fetchOrgs = () => {
    const organizations = _organizationClient.orgGetAll().then(({ data }) => data);
    return organizations;
  }

  const { data: organizations, error, mutate: setOrganization } = useSwr("orgGetAll", fetchOrgs, options);

  return {
    state: {
      organizations,
      error,
      isLoading: !error && !organizations,
    },
    actions: {
      setOrganization,
      getOrganizationClient: () => _organizationClient
    }
  }
};